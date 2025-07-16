"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projCommand = projCommand;
const prisma_1 = require("../../generated/prisma");
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const formatTime_1 = require("../formatTime");
const serverCommand_1 = require("./serverCommand");
const prisma = new prisma_1.PrismaClient();
function projCommand(program) {
    program
        .command("projects")
        .description("Display all projects that the user had worked on, with the duration of the work")
        .action(async () => {
        try {
            const user = await prisma.user.findFirst({
                include: {
                    projects: {
                        include: {
                            languages: true,
                            editors: true,
                        },
                    },
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
                    await showRepos(user);
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
async function showRepos(user) {
    const spinner = (0, ora_1.default)("Fetching projects...").start(); // spinning animation
    try {
        const repos = user.projects.map((project) => {
            return {
                name: project.name,
                timeSpent: project.timeSpent,
                languages: project.languages.map((language) => {
                    return {
                        name: language.name,
                        timeSpent: language.timeSpent,
                    };
                }),
                editors: project.editors.map((editor) => {
                    return {
                        name: editor.name,
                    };
                }),
            };
        });
        if (repos.length === 0) {
            spinner.fail(chalk_1.default.red("No projects found. Start building!!"));
        }
        else {
            spinner.succeed(chalk_1.default.green("Your projects are ready :)"));
            for (const repo of repos) {
                console.log(chalk_1.default.gray("--------------------------------"));
                console.log(chalk_1.default.bold(repo.name));
                console.log(chalk_1.default.blue(`Time spent: ${(0, formatTime_1.formatTime)(repo.timeSpent)}`));
                // for (const language of repo.languages) {
                console.log(chalk_1.default.green(`Languages: ${repo.languages
                    .map((language) => {
                    return `${language.name} (${(0, formatTime_1.formatTime)(language.timeSpent)})`;
                })
                    .join(", ")}`));
                console.log(chalk_1.default.yellow(`Editors: ${repo.editors.map((editor) => editor.name).join(", ")}`));
            }
        }
    }
    catch (error) {
        spinner.fail(chalk_1.default.red("Failed to fetch projects"));
        console.error(error);
    }
}
//# sourceMappingURL=projCommand.js.map