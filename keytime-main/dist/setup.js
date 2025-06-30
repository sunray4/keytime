"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = setup;
const inquirer_1 = __importDefault(require("inquirer"));
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
async function setup() {
    console.log("You haven't setup your keytime account yet!! Let's do it now.");
    let answers;
    try {
        answers = await inquirer_1.default.prompt([
            {
                type: "input",
                name: "username",
                message: "Enter your username: ",
            },
            {
                type: "list",
                name: "timeInterval",
                message: "Choose your preferred heartbeat time interval: ",
                choices: [
                    { name: "1 minute", value: 1 },
                    { name: "2 minutes", value: 2 },
                    { name: "3 minutes", value: 3 },
                    { name: "4 minutes", value: 4 },
                ],
                default: 2,
            },
        ]);
        console.log(answers);
    }
    catch (error) {
        console.error(error);
        return;
    }
    const user = await prisma.user.create({
        data: {
            username: answers.username,
            timeInterval: answers.timeInterval,
        },
    });
    console.log(user);
    try {
        await prisma.$disconnect();
    }
    catch (error) {
        console.error("Error disconnecting from Prisma:", error);
        await prisma.$disconnect();
        process.exit(1);
    }
}
//# sourceMappingURL=setup.js.map