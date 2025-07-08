"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = getUser;
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
async function getUser() {
    let user = await prisma.user.findFirst();
    if (!user) {
        console.log(chalk_1.default.yellow("Let's create your keytime account!"));
        await setup();
        user = await prisma.user.findFirst();
    }
    return user;
}
async function setup() {
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
                name: "maxInterval",
                message: "Choose your preferred max heartbeat interval: ",
                choices: [
                    { name: "5 minutes", value: 5 },
                    { name: "10 minutes", value: 10 },
                    { name: "12 minutes", value: 12 },
                    { name: "15 minutes", value: 15 },
                    { name: "20 minutes", value: 20 },
                ],
                default: 10,
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
            maxInterval: answers.maxInterval,
        },
    });
    console.log(chalk_1.default.green("Keytime account created!"));
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