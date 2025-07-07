import chalk from "chalk";
import { spawn } from "child_process";
import { Command } from "commander";
import fs from "fs";
import ora from "ora";
import path from "path";
import { PrismaClient } from "../../generated/prisma";
import { getUser } from "../setup";

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
}

// initialize server if not running - return 0 if server was already running, 1 if server is started, 2 if error
export async function startServer(): Promise<number> {
  let success = -1;

  let spinner: any;

  try {
    // first check if user exists and create one if not
    const user = await getUser();
    const serverPid = user!.serverPid;
    process.env.userId = user!.id.toString();

    // then start server
    if (serverPid === 0) {
      spinner = ora("Initializing server...").start();
      spinner.color = "blue";
      startServerInBackground();
      // wait for server to start
      await new Promise((resolve) => setTimeout(resolve, 500));
      success = 1;
    } else {
      success = 0;
      console.log(chalk.green("Server is already running"));
    }
  } catch (error) {
    console.error(error);
    success = 2;
  } finally {
    await prisma.$disconnect();
  }
  setTimeout(async () => {
    // need to retrieve user again to get updated serverPid
    const user = await prisma.user.findFirst();
    const pid = user!.serverPid;
    if (pid === 0 || success === 2) {
      spinner.fail(chalk.red("Failed to start server"));
    } else if (success === 1) {
      spinner.succeed(
        chalk.green(`Server started in background with PID: ${pid}`)
      );
      console.log(chalk.blue(`View logs: tail -f ${LOG_FILE_PATH}`));
      console.log(chalk.yellow(`Stop server: keytime stop`));
    }
  }, 700);
  return success;
}

// stop server if running - return 0 if server was not running already, 1 if server is stopped, 2 if error
async function stopServer(): Promise<number> {
  let success = -1;
  let spinner: any;

  try {
    // first check if user exists and create one if not
    const user = await getUser();
    const serverPid = user!.serverPid;
    process.env.userId = user!.id.toString();

    spinner = ora("Stopping server...").start();
    spinner.color = "magenta";

    // then stop server
    if (serverPid === 0) {
      success = 0;
    } else {
      process.kill(serverPid, "SIGTERM"); // server.ts handles changing the stored pid into 0
      success = 1;
    }
  } catch (error: any) {
    console.error(chalk.red("Error stopping server:"), error);
    success = 2;
  }
  setTimeout(async () => {
    // need to retrieve user again to get updated serverPid
    const user = await prisma.user.findFirst();
    const pid = user!.serverPid;
    if (pid !== 0 || success === 2) {
      spinner.fail(chalk.red("Failed to stop server"));
    } else if (success === 1) {
      spinner.succeed(chalk.green("Server stopped"));
      console.log(
        chalk.red(
          "Warning: You won't be able to track time until you restart the server."
        )
      );
    } else {
      spinner.succeed(chalk.yellow("Server was not running"));
      console.log(
        chalk.red(
          "Warning: You won't be able to track time until you restart the server."
        )
      );
    }
  }, 700);

  return success;
}

export function startCommand(program: Command) {
  program
    .command("start")
    .description("Start the server")
    .action(async () => {
      const success = await startServer();
    });
}

export function stopCommand(program: Command) {
  program
    .command("stop")
    .description("Stop the server")
    .action(async () => {
      const success = await stopServer();
    });
}
