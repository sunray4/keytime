"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCommand = userCommand;
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const prisma_1 = require("../../generated/prisma");
const formatTime_1 = require("../formatTime");
const serverCommand_1 = require("./serverCommand");
const prisma = new prisma_1.PrismaClient();
function userCommand(program) {
    program
        .command("user")
        .description("Display user information")
        .action(async () => {
        try {
            const user = await prisma.user.findFirst({
                include: {
                    projects: true,
                    editors: true,
                    languages: true,
                },
            });
            if (!user) {
                console.log(chalk_1.default.red("You don't have a keytime account yet."));
                console.log(chalk_1.default.red("Please run `keytime start` to create one."));
            }
            else {
                const success = await (0, serverCommand_1.startServer)();
                if (success !== 2) {
                    if (success === 1) {
                        await new Promise((resolve) => setTimeout(resolve, 20));
                        const spinner = (0, ora_1.default)("Server has just been restarted. Syncing backlogged data from clients...").start();
                        spinner.color = "blue";
                        await new Promise((resolve) => setTimeout(resolve, 3000));
                        spinner.succeed(chalk_1.default.green("Sync complete"));
                        await new Promise((resolve) => setTimeout(resolve, 500));
                    }
                    printUser(user);
                }
                else {
                    console.log(chalk_1.default.red("Please try to run `keytime start` to start the server."));
                }
            }
        }
        catch (error) {
            console.error("An error occurred:", error instanceof Error ? error.message : String(error));
        }
        finally {
            await prisma.$disconnect();
        }
    });
}
function printUser(user) {
    const asciiArt = [
        "       ==+++++++++===       ",
        "      .=*@########*+=.      ",
        "      .=*%########*+=.      ",
        "      :=#%########*+=:      ",
        "      -=%%########**=-      ",
        "      -====++++++====-      ",
        "         :=++++++=:         ",
        "        ==++++++====        ",
        "        =+%#*****++=        ",
        "        =+*+++++++==        ",
        "        =-.-=++=-.-=        ",
        "           :====:           ",
    ];
    const username = `Username: ${user.username}`;
    const maxInterval = `Max Heartbeat Interval: ${user.maxInterval}`;
    const serverPid = `Server PID: ${user.serverPid}`;
    const editors = `Editors: ${user.editors
        .map((editor) => {
        return `${editor.name} (${(0, formatTime_1.formatTime)(editor.timeSpent)})`;
    })
        .join(", ")}`;
    const languages = `Languages: ${user.languages
        .map((language) => {
        return `${language.name} (${(0, formatTime_1.formatTime)(language.timeSpent)})`;
    })
        .join(", ")}`;
    const lastProject = `Last Project: ${user.lastFolder}`;
    const terminalWidth = process.stdout.columns || 80;
    const textWidth = terminalWidth - asciiArt[0].length;
    if (terminalWidth < 42) {
        return `\nKEYTIME\n*******\n${username}\n${maxInterval}\n${serverPid}\n${editors}\n${languages}\n${lastProject}
    `;
    }
    let text = ["", "KEYTIME", "**********"];
    text = splitText(text, username, textWidth);
    text = splitText(text, maxInterval, textWidth);
    text = splitText(text, serverPid, textWidth);
    text = splitText(text, editors, textWidth);
    text = splitText(text, languages, textWidth);
    text = splitText(text, lastProject, textWidth);
    for (let i = 0; i < Math.max(asciiArt.length, text.length); i++) {
        const asciiLine = asciiArt[i] ?? " ".repeat(asciiArt[0].length);
        const textLine = text[i] ?? "";
        console.log(`${asciiLine}${textLine}`);
    }
}
function splitText(text, cur, textWidth) {
    while (cur.length > textWidth) {
        text.push(cur.substring(0, textWidth));
        cur = cur.substring(textWidth, cur.length);
    }
    text.push(cur);
    return text;
}
//# sourceMappingURL=userCommand.js.map