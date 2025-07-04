"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const ws_1 = __importDefault(require("ws"));
let ws = null;
class Server {
    ws = null;
    output;
    constructor(output) {
        this.output = output;
        this.connect();
    }
    connect() {
        this.ws = new ws_1.default('ws://localhost:8081');
        this.ws.on('error', (err) => this.output.appendLine(err.message));
        this.ws.on('open', () => {
            this.output.appendLine('Connected to server');
            this.ws?.send('Hello from client');
        });
        this.ws.on('message', (data) => {
            this.output.appendLine(`Received message: ${data.toString()}`);
        });
        this.ws.on('close', () => {
            this.output.appendLine('Disconnected from server');
        });
    }
    send(message) {
        this.ws?.send(message);
        this.output.appendLine(`Sent message: ${message}`);
    }
    close() {
        this.ws?.close();
    }
}
exports.Server = Server;
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
//# sourceMappingURL=server.js.map