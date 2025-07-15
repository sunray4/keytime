import { Prisma, PrismaClient } from "../../generated/prisma";

import chalk from "chalk";
import { Command } from "commander";
import ora from "ora";
import { formatTime } from "../formatTime";
import { startServer } from "./serverCommand";

const prisma = new PrismaClient();

type User = Prisma.UserGetPayload<{
  include: {
    projects: {
      include: {
        languages: true;
        editors: true;
      };
    };
  };
}>;

export function projCommand(program: Command) {
  program
    .command("proj")
    .description(
      "Display all projects that the user had worked on, with the duration of the work"
    )
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
            await showRepos(user!);
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

async function showRepos(user: User) {
  const spinner = ora("Fetching projects...").start(); // spinning animation
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
      spinner.fail(chalk.red("No projects found. Start building!!"));
    } else {
      spinner.succeed(chalk.green("Your projects are ready :)"));
      for (const repo of repos) {
        console.log(chalk.gray("--------------------------------"));
        console.log(chalk.bold(repo.name));
        console.log(chalk.blue(`Time spent: ${formatTime(repo.timeSpent)}`));
        // for (const language of repo.languages) {

        console.log(
          chalk.green(
            `Languages: ${repo.languages
              .map((language) => {
                return `${language.name} (${formatTime(language.timeSpent)})`;
              })
              .join(", ")}`
          )
        );
        console.log(
          chalk.yellow(
            `Editors: ${repo.editors.map((editor) => editor.name).join(", ")}`
          )
        );
      }
    }
  } catch (error) {
    spinner.fail(chalk.red("Failed to fetch projects"));
    console.error(error);
  }
}
