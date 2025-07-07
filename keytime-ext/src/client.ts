import * as vscode from "vscode";
import WebSocket from "ws";
import { findFolder } from "./findFolder";

interface Message {
  type: string;
  timestamp: number;
  folder: string;
  lang: string;
  editor: string;
}

export class Client {
  private ws: WebSocket | null = null;
  private output: vscode.OutputChannel;
  private queue: Message[] = [];
  private isOpen: boolean = false;
  private isConnecting: boolean = false; // to prevent concurrent reconnection attempts - this should be true when ws is open

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
      this.sendQueue();
    });

    this.ws.on("message", (data) => {
      this.output.appendLine(`Received message: ${data.toString()}`);
    });

    this.ws.on("close", (code, reason) => {
      this.output.appendLine("Disconnected from server");
      this.isOpen = false;
      this.isConnecting = false;
    });
  }

  private sendQueue() {
    if (this.isOpen) {
      this.queue.forEach(async (message) => {
        this.sendHeartbeat(message);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      });
      this.output.appendLine(`Sent ${this.queue.length} messages from queue`);
      this.queue = [];
    }
  }

  public prepareHeartbeat(
    doc: vscode.TextDocument,
    timestamp: number,
    folderNames: string[]
  ) {
    const message: Message = {
      type: "heartbeat",
      timestamp: timestamp,
      folder: findFolder(folderNames, doc.uri.path),
      lang: doc.languageId,
      editor: "vscode",
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
    } else if (this.isConnecting) {
      this.queue.push(message);
    } else {
      this.queue.push(message);
      this.connect();
    }
  }

  public close() {
    this.ws?.close();
  }
}
