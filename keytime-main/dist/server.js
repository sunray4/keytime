"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = server;
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const wss = new ws_1.WebSocketServer({ port: 8081 });
// change ws to use the same port as the express server for production
// const server = app.listen(8080);
// const wss = new WebSocketServer({ 
//   server,           // Use same HTTP server
//   path: '/ws'       // Different path instead of port
// });
function server() {
    try {
        app.listen(8080, () => console.log('Server started on port 8080'));
        wss.on('connection', (ws) => {
            ws.on('error', (error) => {
                console.error('WebSocket error:', error);
            });
            // debugging code - remove later
            console.log('client connected');
            ws.send('Hello from server');
            ws.on('message', (data) => {
                console.log('Received message:', data.toString());
            });
            wss.on('close', () => console.log('Connection closed'));
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}
;
//# sourceMappingURL=server.js.map