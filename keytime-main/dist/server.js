"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = server;
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const handleHeartbeat_1 = require("./handleHeartbeat");
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
        // app.listen(8080, () => console.log('Server started on port 8080'));
        wss.on("connection", (ws) => {
            ws.on("error", (error) => {
                console.error("WebSocket error:", error);
            });
            console.log("client connected");
            ws.send("Hello from server");
            ws.on("message", (data) => {
                console.log("Received message:", data.toString());
                try {
                    const message = JSON.parse(data.toString());
                    if (message.type === "heartbeat") {
                        (0, handleHeartbeat_1.handleHeartbeat)(message);
                    }
                }
                catch (error) {
                    console.log("not a json heartbeat");
                }
            });
            ws.on("close", () => console.log("Connection closed"));
        });
        console.log("WebSocket server started on port 8081");
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}
// Run server if this file is executed directly
if (require.main === module) {
    server();
    // Graceful shutdown
    process.on("SIGINT", () => {
        console.log("\nShutting down server...");
        wss.close(() => {
            console.log("Server closed");
            process.exit(0);
        });
    });
    process.on("SIGTERM", () => {
        console.log("\nShutting down server...");
        wss.close(() => {
            console.log("Server closed");
            process.exit(0);
        });
    });
}
//# sourceMappingURL=server.js.map