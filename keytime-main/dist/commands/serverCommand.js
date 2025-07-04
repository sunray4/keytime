"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startCommand = startCommand;
exports.stopCommand = stopCommand;
const chalk_1 = __importDefault(require("chalk"));
const child_process_1 = require("child_process");
const prisma_1 = require("../../generated/prisma");
const setup_1 = require("../setup");
const prisma = new prisma_1.PrismaClient();
async function startServerInBackground() {
    // main process dir is dist folder
    const serverProcess = (0, child_process_1.spawn)("node", [__dirname + "/server.js"], {
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
            console.log(chalk_1.default.yellow("You don't have an account yet. Let's create one now!"));
            await (0, setup_1.setup)();
            user = await prisma.user.findFirst();
        }
        process.env.userId = user.id.toString();
        const serverPid = user.serverPid;
        if (serverPid === 0) {
            startServerInBackground();
            // wait for server to start
            await new Promise((resolve) => setTimeout(resolve, 500));
        }
    }
    catch (error) {
        console.error(error);
    }
    finally {
        await prisma.$disconnect();
    }
}
async function stopServer() {
    let user = await prisma.user.findFirst();
    if (!user) {
        console.log(chalk_1.default.yellow("You don't have an account yet. Let's create one now!"));
        await (0, setup_1.setup)();
        user = await prisma.user.findFirst();
    }
    const serverPid = user.serverPid;
    if (serverPid === 0) {
        console.log(chalk_1.default.yellow("Server is not running"));
        return;
    }
    process.env.userId = user.id.toString();
    process.kill(serverPid, "SIGTERM"); // server.ts handles changing the stored pid into 0
    console.log(chalk_1.default.green("Server stopped"));
}
function startCommand(program) {
    program
        .command("start")
        .description("Start the server")
        .action(async () => {
        await startServer();
    });
}
function stopCommand(program) {
    program
        .command("stop")
        .description("Stop the server")
        .action(async () => {
        await stopServer();
    });
}
//# sourceMappingURL=serverCommand.js.map