"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCommand = userCommand;
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const prisma_1 = require("../../generated/prisma");
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
                    console.log(printUser(user));
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
    return `
            .::::::::::::::::::::::.            KEYTIME
            ========================            ----------------
           .==+%%#############***===.           Username: ${user.username}
           .==*%%%############***+==.           Max Heartbeat Interval: ${user.maxInterval}
           :==*%%##############**+==:           Server PID: ${user.serverPid}
           -==#%%##############**+==-           Languages: ${user.languages
        .map((language) => language.name)
        .join(", ")}
           -==#%%##############***==-           Editors: ${user.editors
        .map((editor) => editor.name)
        .join(", ")}
           ===%%%##############***===           Last project: ${user.lastFolder}
           ==+%%%##############***===           
          .==+***+*************+++===.          
          .===--=====================.          
                :==+********+==:                
              .:-===+++++++++==-:.              
             :====================:             
             :==+##**********+++==:             
             :==*###*********+++==:             
             :==+##**********+++==:             
             :====================:             
             :==-::-===++===-::-==:             
             .==.  :==+**+==:  .==.             
                   :========:                   
                    .::::::.                    
  `;
}
//# sourceMappingURL=userCommand.js.map