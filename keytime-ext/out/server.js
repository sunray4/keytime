"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = server;
const ws_1 = __importDefault(require("ws"));
let ws = null;
function server(output) {
    ws = new ws_1.default('ws://localhost:8081');
    ws.on('error', output.appendLine);
    ws.on('open', () => {
        output.appendLine('Connected to server');
        ws?.send('Hello from client');
    });
    ws.on('message', (data) => {
        output.appendLine(`Received message: ${data.toString()}`);
    });
    ws.on('error', (error) => {
        output.appendLine(`WebSocket error: ${error}`);
    });
    ws.on('close', () => {
        output.appendLine('Disconnected from server');
    });
    return () => {
        if (ws) {
            ws.close();
            ws = null;
        }
    };
}
//# sourceMappingURL=server.js.map