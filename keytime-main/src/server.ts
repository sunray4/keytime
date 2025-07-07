import chalk from "chalk";
import express from "express";
import { WebSocketServer } from "ws";
import { PrismaClient } from "../generated/prisma";
import { handleHeartbeat } from "./handleHeartbeat";

const prisma = new PrismaClient();

const app = express();

const wss = new WebSocketServer({ port: 8081 });
let activeConnections = 0;

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
    await changeServerPid(process.env.userId!, process.pid);
    // app.listen(8080, () => console.log('Server started on port 8080'));
    wss.on("connection", (ws) => {
      activeConnections++;
      console.log(`client connected (${activeConnections} active)`);

      ws.on("error", (error) => {
        console.error("WebSocket error:", error);
      });
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

      ws.on("close", () => {
        activeConnections--;
        console.log(`Connection closed (${activeConnections} active)`);
      });
    });

    console.log(
      chalk.green(
        `Server started in background with PID: ${process.pid} on port 8081`
      )
    );
  } catch (error) {
    console.error(error);
    await changeServerPid(process.env.userId!, 0);
    process.exit(1);
  }
}

// Run server if this file is executed directly
if (require.main === module) {
  server();

  // keytime stop command shuts down the server
  process.on("SIGTERM", () => {
    console.log("\nentered sigterm");

    prisma.user
      .findFirst()
      .then((user) => {
        const userId = user!.id.toString();
        console.log(`user id: ${user!.id}`);

        console.log(
          `Closing WebSocket server with ${activeConnections} active connections`
        );

        // Close all active connections first
        wss.clients.forEach((client) => {
          client.close();
          activeConnections--;
        });

        // // Set a timeout in case wss.close() doesn't trigger the callback
        // const closeTimeout = setTimeout(() => {
        //   console.log("WebSocket close timeout, forcing exit");
        //   changeServerPid(userId, 0)
        //     .then(() => process.exit(0))
        //     .catch(() => process.exit(1));
        // }, 5000); // 5 second timeout

        wss.close(() => {
          // clearTimeout(closeTimeout);
          console.log("WebSocket server closing...");
          changeServerPid(userId, 0)
            .then(() => {
              console.log("Server closed");
              process.exit(0);
            })
            .catch((error) => {
              console.error("Error updating server PID:", error);
              process.exit(1);
            });
        });
      })
      .catch((error) => {
        console.error("Error getting user:", error);
        process.exit(1);
      });
  });
}

// updated server pid when server process crashes
process.on("uncaughtException", async (error) => {
  console.error("Uncaught Exception:", error);
  await changeServerPid(process.env.userId!, 0);
  process.exit(1);
});
process.on("unhandledRejection", async (reason) => {
  console.error("Unhandled Rejection:", reason);
  await changeServerPid(process.env.userId!, 0);
  process.exit(1);
});

async function changeServerPid(userId: string, pid: number) {
  console.log("in changeServerPid: ", userId, pid);
  await prisma.user.update({
    where: { id: parseInt(userId) },
    data: { serverPid: pid },
  });
  const user = await prisma.user.findFirst({
    where: { id: parseInt(userId) },
  });
  console.log("user: ", user);
  console.log("changed server pid to: ", pid);
}
