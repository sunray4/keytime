import { PrismaClient } from '../../generated/prisma'

import { Command } from 'commander';
import { setup } from '../setup';

const prisma = new PrismaClient()

export function  reposCommand(program: Command) {
    
    program
    .command('repos')
    .description('Display all repositories that the user had worked on, with the duration of the work')
    .action(async () => {
        try {
            if (!prisma.user.findUnique({
                where: {
                    id: 1
                }
            })) {
                await setup()
            }
            else {
                const repos = await prisma.project.findMany({
                    where: {
                        authorId: 1
                    }
                })
                console.log(repos)
            }
        } catch (error) {
            console.error('An error occurred:', error instanceof Error ? error.message : String(error));
        }
    });
}