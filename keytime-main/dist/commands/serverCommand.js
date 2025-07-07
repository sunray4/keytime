"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = startServer;
exports.startCommand = startCommand;
exports.stopCommand = stopCommand;
const chalk_1 = __importDefault(require("chalk"));
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const ora_1 = __importDefault(require("ora"));
const path_1 = __importDefault(require("path"));
const prisma_1 = require("../../generated/prisma");
const setup_1 = require("../setup");
const prisma = new prisma_1.PrismaClient();
const LOG_FILE_PATH = path_1.default.join(process.cwd(), "keytime-server.log");
async function startServerInBackground() {
    // use log file to store server output
    const logFile = fs_1.default.openSync(LOG_FILE_PATH, "w");
    const serverProcess = (0, child_process_1.spawn)("node", [path_1.default.join(__dirname, "../server.js")], {
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
async function startServer() {
    let success = -1;
    let spinner;
    try {
        // first check if user exists and create one if not
        const user = await (0, setup_1.getUser)();
        const serverPid = user.serverPid;
        process.env.userId = user.id.toString();
        // then start server
        if (serverPid === 0) {
            spinner = (0, ora_1.default)("Initializing server...").start();
            spinner.color = "blue";
            startServerInBackground();
            // wait for server to start
            await new Promise((resolve) => setTimeout(resolve, 500));
            success = 1;
        }
        else {
            success = 0;
        }
    }
    catch (error) {
        console.error(error);
        success = 2;
    }
    finally {
        await prisma.$disconnect();
    }
    setTimeout(async () => {
        // need to retrieve user again to get updated serverPid
        const user = await prisma.user.findFirst();
        const pid = user.serverPid;
        if (pid === 0 || success === 2) {
            spinner.fail(chalk_1.default.red("Failed to start server"));
        }
        else if (success === 1) {
            spinner.succeed(chalk_1.default.green(`Server started in background with PID: ${pid}`));
            console.log(chalk_1.default.blue(`View logs: tail -f ${LOG_FILE_PATH}`));
            console.log(chalk_1.default.yellow(`Stop server: keytime stop`));
        }
    }, 700);
    return success;
}
// stop server if running - return 0 if server was not running already, 1 if server is stopped, 2 if error
async function stopServer() {
    let success = -1;
    let spinner;
    try {
        // first check if user exists and create one if not
        const user = await (0, setup_1.getUser)();
        const serverPid = user.serverPid;
        process.env.userId = user.id.toString();
        spinner = (0, ora_1.default)("Stopping server...").start();
        spinner.color = "magenta";
        // then stop server
        if (serverPid === 0) {
            success = 0;
        }
        else {
            process.kill(serverPid, "SIGTERM"); // server.ts handles changing the stored pid into 0
            success = 1;
        }
    }
    catch (error) {
        console.error(chalk_1.default.red("Error stopping server:"), error);
        success = 2;
    }
    setTimeout(async () => {
        // need to retrieve user again to get updated serverPid
        const user = await prisma.user.findFirst();
        const pid = user.serverPid;
        if (pid !== 0 || success === 2) {
            spinner.fail(chalk_1.default.red("Failed to stop server"));
        }
        else if (success === 1) {
            spinner.succeed(chalk_1.default.green("Server stopped"));
            console.log(chalk_1.default.red("Warning: You won't be able to track time until you restart the server."));
        }
        else {
            spinner.succeed(chalk_1.default.yellow("Server was not running"));
            console.log(chalk_1.default.red("Warning: You won't be able to track time until you restart the server."));
        }
    }, 700);
    return success;
}
function startCommand(program) {
    program
        .command("start")
        .description("Start the server")
        .action(async () => {
        const success = await startServer();
    });
}
function stopCommand(program) {
    program
        .command("stop")
        .description("Stop the server")
        .action(async () => {
        const success = await stopServer();
    });
}
//# sourceMappingURL=serverCommand.js.map