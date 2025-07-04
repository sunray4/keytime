import chalk from "chalk";
import { spawn } from "child_process";
import { Command } from "commander";
import { PrismaClient } from "../../generated/prisma";
import { setup } from "../setup";

const prisma = new PrismaClient();

async function startServerInBackground() {
  // main process dir is dist folder
  const serverProcess = spawn("node", [__dirname + "/server.js"], {
    detached: true,
    stdio: "ignore", // ignore the server process output
  });

  serverProcess.unref(); // server process is now detached from the main process
}

// initialize server if not running
async function startServer() {
  try {
    let user = await prisma.user.findFirst();
    if (!user) {
      console.log(
        chalk.yellow("You don't have an account yet. Let's create one now!")
      );
      await setup();
      user = await prisma.user.findFirst();
    }
    process.env.userId = user!.id.toString();
    const serverPid = user!.serverPid;
    if (serverPid === 0) {
      startServerInBackground();
      // wait for server to start
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

async function stopServer() {
  let user = await prisma.user.findFirst();
  if (!user) {
    console.log(
      chalk.yellow("You don't have an account yet. Let's create one now!")
    );
    await setup();
    user = await prisma.user.findFirst();
  }
  const serverPid = user!.serverPid;
  if (serverPid === 0) {
    console.log(chalk.yellow("Server is not running"));
    return;
  }
  process.env.userId = user!.id.toString();
  process.kill(serverPid, "SIGTERM"); // server.ts handles changing the stored pid into 0
  console.log(chalk.green("Server stopped"));
}

export function startCommand(program: Command) {
  program
    .command("start")
    .description("Start the server")
    .action(async () => {
      await startServer();
    });
}

export function stopCommand(program: Command) {
  program
    .command("stop")
    .description("Stop the server")
    .action(async () => {
      await stopServer();
    });
}
