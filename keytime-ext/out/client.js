"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const ws_1 = __importDefault(require("ws"));
const findFolder_1 = require("./findFolder");
class Client {
    ws = null;
    output;
    queue = [];
    isOpen = false;
    isConnecting = false; // to prevent concurrent reconnection attempts - this should be true when ws is open
    constructor(output) {
        this.output = output;
        this.connect();
    }
    async connect() {
        if (this.isConnecting) {
            return;
        }
        this.isConnecting = true;
        this.ws = new ws_1.default("ws://localhost:8081");
        this.ws.on("error", (err) => {
            this.output.appendLine(err.message);
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
            // attempt reconnection
            if (code !== 1000) {
                this.output.appendLine("Server crashed, attempting to reconnect...");
                this.connect();
            }
        });
    }
    sendQueue() {
        if (this.isOpen) {
            this.queue.forEach((message) => this.sendHeartbeat(message));
            this.queue = [];
        }
    }
    prepareHeartbeat(doc, timestamp, folderNames) {
        const message = {
            type: "heartbeat",
            timestamp: timestamp,
            folder: (0, findFolder_1.findFolder)(folderNames, doc.uri.path),
            lang: doc.languageId,
            editor: "vscode",
        };
        if (message.folder === "") {
            this.output.appendLine("No corresponding folder found. Heartbeat not sent.");
            return;
        }
        this.sendHeartbeat(message);
    }
    sendHeartbeat(message) {
        if (this.isOpen) {
            this.ws?.send(JSON.stringify(message));
            this.output.appendLine(`Sent message: ${JSON.stringify(message)}`);
        }
        else {
            this.queue.push(message);
            this.connect();
        }
    }
    close() {
        this.ws?.close();
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map