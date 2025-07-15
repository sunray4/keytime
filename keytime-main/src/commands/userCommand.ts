import chalk from "chalk";
import { Command } from "commander";
import ora from "ora";
import { Prisma, PrismaClient } from "../../generated/prisma";
import { startServer } from "./serverCommand";

const prisma = new PrismaClient();

type User = Prisma.UserGetPayload<{
  include: {
    projects: true;
    editors: true;
    languages: true;
  };
}>;

export function userCommand(program: Command) {
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
          console.log(chalk.red("You don't have a keytime account yet."));
          console.log(chalk.red("Please run `keytime start` to create one."));
        } else {
          const success = await startServer();
          if (success !== 2) {
            if (success === 1) {
              await new Promise((resolve) => setTimeout(resolve, 20));
              const spinner = ora(
                "Server has just been restarted. Syncing backlogged data from clients..."
              ).start();
              spinner.color = "blue";
              await new Promise((resolve) => setTimeout(resolve, 3000));
              spinner.succeed(chalk.green("Sync complete"));
              await new Promise((resolve) => setTimeout(resolve, 500));
            }
            console.log(printUser(user!));
          } else {
            console.log(
              chalk.red(
                "Please try to run `keytime start` to start the server."
              )
            );
          }
        }
      } catch (error) {
        console.error(
          "An error occurred:",
          error instanceof Error ? error.message : String(error)
        );
      } finally {
        await prisma.$disconnect();
      }
    });
}

function printUser(user: User) {
  return `
            .::::::::::::::::::::::.            KEYTIME
            ========================            ----------------
           .==+%%#############***===.           Username: ${user.username}
           .==*%%%############***+==.           Max Heartbeat Interval: ${
             user.maxInterval
           }
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
