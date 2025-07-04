import chalk from "chalk";
import { spawn } from "child_process";
import { Command } from "commander";
import fs from "fs";
import ora from "ora";
import path from "path";
import { PrismaClient } from "../../generated/prisma";
import { setup } from "../setup";

const prisma = new PrismaClient();

const LOG_FILE_PATH = path.join(process.cwd(), "keytime-server.log");

async function startServerInBackground() {
  // use log file to store server output
  const logFile = fs.openSync(LOG_FILE_PATH, "w");

  const serverProcess = spawn("node", [path.join(__dirname, "../server.js")], {
    detached: true,
    stdio: ["ignore", logFile, logFile], // Redirect stdout and stderr to log file
  });

  serverProcess.unref();

  // Check if PID is available
  if (!serverProcess.pid) {
    throw new Error("Failed to get server process PID");
  }

  console.log(
    chalk.green(`Server started in background with PID: ${serverProcess.pid}`)
  );
  console.log(chalk.blue(`View logs: tail -f ${LOG_FILE_PATH}`));
  console.log(chalk.yellow(`Stop server: keytime stop`));
}

// initialize server if not running
async function startServer(): Promise<boolean> {
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
    return true;
  } catch (error) {
    console.error(error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

async function stopServer(): Promise<boolean> {
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
    return false;
  }
  process.env.userId = user!.id.toString();

  try {
    process.kill(serverPid, "SIGTERM"); // server.ts handles changing the stored pid into 0
    return true;
  } catch (error: any) {
    console.error(chalk.red("Error stopping server:"), error);
    return false;
  }
}

export function startCommand(program: Command) {
  program
    .command("start")
    .description("Start the server")
    .action(async () => {
      const spinner = ora("Initializing server...").start();
      spinner.color = "blue";
      const success = await startServer();
      setTimeout(async () => {
        const user = await prisma.user.findFirst();
        // console.log("in startCommand: ", user);
        const pid = user!.serverPid;
        if (pid === 0 || !success) {
          spinner.fail(chalk.red("Failed to start server"));
        } else {
          spinner.succeed(chalk.green("Server started"));
        }
      }, 700);
    });
}

export function stopCommand(program: Command) {
  program
    .command("stop")
    .description("Stop the server")
    .action(async () => {
      const spinner = ora("Stopping server...").start();
      spinner.color = "magenta";
      const success = await stopServer();
      setTimeout(async () => {
        const user = await prisma.user.findFirst();
        // console.log("in stopCommand: ", user);
        const pid = user!.serverPid;
        if (pid !== 0 || !success) {
          spinner.fail(chalk.red("Failed to stop server"));
        } else {
          spinner.succeed(chalk.green("Server stopped"));
        }
      }, 700);
    });
}
