"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reposCommand = reposCommand;
const prisma_1 = require("../../generated/prisma");
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const setup_1 = require("../setup");
const prisma = new prisma_1.PrismaClient();
function reposCommand(program) {
    program
        .command("repos")
        .description("Display all repositories that the user had worked on, with the duration of the work")
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
            if (user === null) {
                await (0, setup_1.setup)();
            }
            else {
                await showRepos(user);
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
// this needs some fixing - doesnt really work correctly
function formatTime(milliseconds) {
    const seconds = milliseconds / 1000n;
    const hours = seconds / 3600n;
    const minutes = (seconds % 3600n) / 60n;
    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    }
    else if (minutes > 0) {
        return `${minutes}m`;
    }
    else {
        return `${seconds}s`;
    }
}
async function showRepos(user) {
    const spinner = (0, ora_1.default)("Fetching repositories...").start(); // spinning animation
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
            spinner.fail(chalk_1.default.red("No repositories found. Start building!!"));
        }
        else {
            spinner.succeed(chalk_1.default.green("Your repositories are ready :)"));
            console.log(repos);
        }
    }
    catch (error) {
        spinner.fail(chalk_1.default.red("Failed to fetch repositories"));
        console.error(error);
    }
}
//# sourceMappingURL=reposCommand.js.map