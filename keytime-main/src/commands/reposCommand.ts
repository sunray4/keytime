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

            const users = await prisma.user.findMany();
            
            if (users.length === 0) {
                await setup()
            }
            else {
                const repos = await prisma.project.findFirst()
                console.log(repos)
            }
        } catch (error) {
            console.error('An error occurred:', error instanceof Error ? error.message : String(error));
        }
    });
}