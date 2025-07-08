import * as vscode from "vscode";
import WebSocket from "ws";
import { findFolder } from "./findFolder";

interface Message {
  type: string;
  date: string;
  timestamp: number;
  folder: string;
  lang: string;
  editor: string;
}

export class Client {
  private ws: WebSocket | null = null;
  private output: vscode.OutputChannel;
  private initialHb: Message | null = null;
  private sentWarning: boolean = false;
  private isOpen: boolean = false;
  private isConnecting: boolean = false; // to prevent concurrent reconnection attempts - this should be true when ws is open
  private maxInterval: number | null = null;

  constructor(output: vscode.OutputChannel) {
    this.output = output;
    this.connect();
  }

  private async connect() {
    if (this.isConnecting) {
      return;
    }
    this.isConnecting = true;

    this.ws = new WebSocket("ws://localhost:8081");

    this.ws.on("error", (err) => {
      this.output.appendLine(err.message);
      this.isOpen = false;
      this.isConnecting = false;
    });

    this.ws.on("open", () => {
      this.output.appendLine("Connected to server");
      this.isOpen = true;
      this.ws?.send("Hello from client");
      if (this.initialHb) {
        this.sendHeartbeat(this.initialHb);
        this.output.appendLine("sent initial heartbeat...");
        this.initialHb = null;
      }
      // this.sendQueue();
    });

    this.ws.on("message", (data) => {
      this.output.appendLine(`Received message: ${data.toString()}`);
      try {
        const message = JSON.parse(data.toString());
        if (typeof message === "object" && message !== null) {
          if (message.type === "maxInterval") {
            this.output.appendLine("Received maxInterval");
            this.maxInterval = message.maxInterval;
          }
        }
      } catch (error) {
        this.output.appendLine("this message is not a valid JSON");
      }
    });

    this.ws.on("close", (code, reason) => {
      this.output.appendLine("Disconnected from server");
      this.isOpen = false;
      this.isConnecting = false;
      if (!this.sentWarning) {
        vscode.window.showWarningMessage(
          "Keytime server disconnected. You won't be able to track coding time until you restart the server."
        );
        this.sentWarning = true;
      }
    });
  }

  // private sendQueue() {
  //   if (this.isOpen) {
  //     this.queue.forEach(async (message) => {
  //       this.sendHeartbeat(message);
  //       await new Promise((resolve) => setTimeout(resolve, 1000));
  //     });
  //     this.output.appendLine(`Sent ${this.queue.length} messages from queue`);
  //     this.queue = [];
  //   }
  // }

  public prepareHeartbeat(
    doc: vscode.TextDocument,
    timestamp: number,
    folderNames: string[],
    date: string
  ) {
    const message: Message = {
      type: "heartbeat",
      timestamp: timestamp,
      folder: findFolder(folderNames, doc.uri.path),
      lang: doc.languageId,
      editor: "vscode",
      date: date,
    };
    if (message.folder === "") {
      this.output.appendLine(
        "No corresponding folder found. Heartbeat not sent."
      );
      return;
    }
    this.sendHeartbeat(message);
  }

  private sendHeartbeat(message: Message) {
    if (this.isOpen) {
      this.ws?.send(JSON.stringify(message));
      this.output.appendLine(`Sent message: ${JSON.stringify(message)}`);
      // } else if (this.isConnecting) {
      //   this.queue.push(message);
    } else {
      // this.queue.push(message);
      this.initialHb = message;
      this.connect();
    }
  }

  public getMaxInterval() {
    if (this.maxInterval) {
      return this.maxInterval;
    } else {
      return null;
    }
  }

  public close() {
    this.ws?.close();
  }
}
