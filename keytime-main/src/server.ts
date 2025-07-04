import chalk from "chalk";
import express from "express";
import { WebSocketServer } from "ws";
import { PrismaClient } from "../generated/prisma";
import { handleHeartbeat } from "./handleHeartbeat";

const prisma = new PrismaClient();

const app = express();

const wss = new WebSocketServer({ port: 8081 });

app.use(express.json());
// change ws to use the same port as the express server for production
// const server = app.listen(8080);
// const wss = new WebSocketServer({
//   server,           // Use same HTTP server
//   path: '/ws'       // Different path instead of port
// });

export async function server() {
  try {
    // store the PID in db
    changeServerPid(process.env.userId!, process.pid);
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
            handleHeartbeat(message);
          }
        } catch (error) {
          console.log("not a json heartbeat");
        }
      });

      ws.on("close", () => console.log("Connection closed"));
    });

    console.log(
      chalk.green(
        `Server started in background with PID: ${process.pid} on port 8081`
      )
    );
  } catch (error) {
    console.error(error);
    changeServerPid(process.env.userId!, 0);
    process.exit(1);
  }
}

// Run server if this file is executed directly
if (require.main === module) {
  server();

  // keytime stop command shuts down the server
  process.on("SIGTERM", () => {
    console.log("\nShutting down server...");
    const userId = process.env.userId;

    wss.close(async () => {
      console.log("Server closed");
      changeServerPid(userId!, 0);
      process.exit(0);
    });
  });
}

// updated server pid when server process crashes
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  changeServerPid(process.env.userId!, 0);
  process.exit(1);
});
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
  changeServerPid(process.env.userId!, 0);
  process.exit(1);
});

function changeServerPid(userId: string, pid: number) {
  prisma.user.update({
    where: { id: parseInt(userId) },
    data: { serverPid: pid },
  });
}
