"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCommand = userCommand;
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const slice_ansi_1 = __importDefault(require("slice-ansi"));
const string_width_1 = __importDefault(require("string-width"));
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
        "                            ",
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
    const username = chalk_1.default.cyan(`Username: ${user.username}`);
    const maxInterval = chalk_1.default.magenta(`Max Heartbeat Interval: ${user.maxInterval}`);
    const serverPid = chalk_1.default.green(`Server PID: ${user.serverPid}`);
    const editors = chalk_1.default.cyanBright(`Editors: ${user.editors
        .map((editor) => {
        return `${editor.name} (${(0, formatTime_1.formatTime)(editor.timeSpent)})`;
    })
        .join(", ")}`);
    const languages = chalk_1.default.hex("ed7056")(`Languages: ${user.languages
        .map((language) => {
        return `${language.name} (${(0, formatTime_1.formatTime)(language.timeSpent)})`;
    })
        .join(", ")}`);
    const lastProject = chalk_1.default.yellow(`Last Project: ${user.lastFolder}`);
    const terminalWidth = process.stdout.columns || 80;
    const textWidth = terminalWidth - asciiArt[0].length;
    if (terminalWidth < 42) {
        console.log(`\n${chalk_1.default.blue.bold("KEYTIME")}\n${chalk_1.default.dim("**********")}\n${username}\n${maxInterval}\n${serverPid}\n${editors}\n${languages}\n${lastProject}
    `);
    }
    let text = ["", "", chalk_1.default.blue.bold("KEYTIME"), chalk_1.default.dim("**********")];
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
    while ((0, string_width_1.default)(cur) > textWidth) {
        text.push((0, slice_ansi_1.default)(cur, 0, textWidth));
        cur = (0, slice_ansi_1.default)(cur, textWidth);
    }
    text.push(cur);
    return text;
}
//# sourceMappingURL=userCommand.js.map