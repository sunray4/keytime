"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reposCommand = reposCommand;
const prisma_1 = require("../../generated/prisma");
const setup_1 = require("../setup");
const prisma = new prisma_1.PrismaClient();
function reposCommand(program) {
    program
        .command('repos')
        .description('Display all repositories that the user had worked on, with the duration of the work')
        .action(async () => {
        try {
            const users = await prisma.user.findMany();
            console.log("users:", users);
            if (users.length === 0) {
                await (0, setup_1.setup)();
            }
            else {
                const repos = await prisma.project.findMany();
                console.log("repos:", repos);
            }
        }
        catch (error) {
            console.error('An error occurred:', error instanceof Error ? error.message : String(error));
        }
    });
}
//# sourceMappingURL=reposCommand.js.map