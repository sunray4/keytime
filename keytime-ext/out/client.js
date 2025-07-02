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
    constructor(output) {
        this.output = output;
        this.connect();
    }
    async connect() {
        this.ws = new ws_1.default('ws://localhost:8081');
        this.ws.on('error', (err) => this.output.appendLine(err.message));
        this.ws.on('open', () => {
            this.output.appendLine('Connected to server');
            this.isOpen = true;
            this.ws?.send('Hello from client');
            this.sendQueue();
        });
        this.ws.on('message', (data) => {
            this.output.appendLine(`Received message: ${data.toString()}`);
        });
        this.ws.on('close', () => {
            this.output.appendLine('Disconnected from server');
        });
    }
    sendQueue() {
        if (this.isOpen) {
            this.queue.forEach(message => this.sendHeartbeat(message));
        }
    }
    prepareHeartbeat(doc, timestamp, folderNames) {
        const message = {
            type: "heartbeat",
            timestamp: timestamp,
            folder: folderNames[1] ? (0, findFolder_1.findFolder)(folderNames, doc.uri.path) || folderNames[0] : folderNames[0],
            lang: doc.languageId
        };
        this.sendHeartbeat(message);
    }
    sendHeartbeat(message) {
        if (this.isOpen) {
            this.ws?.send(JSON.stringify(message));
            this.output.appendLine(`Sent message: ${JSON.stringify(message)}`);
        }
        else {
            this.queue.push(message);
        }
    }
    close() {
        this.ws?.close();
    }
}
exports.Client = Client;
// export function server(output: vscode.OutputChannel): () => void {
//     ws = new WebSocket('ws://localhost:8081');
//     ws.on('error', output.appendLine);
//     ws.on('open', () => {
//         output.appendLine('Connected to server');
//         ws?.send('Hello from client');
//     });
//     ws.on('message', (data) => {
//         output.appendLine(`Received message: ${data.toString()}`);
//     });
//     ws.on('error', (error) => {
//         output.appendLine(`WebSocket error: ${error}`);
//     });
//     ws.on('close', () => {
//         output.appendLine('Disconnected from server');
//     });
//     return () => {
//         if (ws) {
//             ws.close();
//             ws = null;
//         }
//     };
// }
//# sourceMappingURL=client.js.map