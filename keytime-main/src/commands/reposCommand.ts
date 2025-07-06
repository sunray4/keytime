import { Prisma, PrismaClient } from "../../generated/prisma";

import chalk from "chalk";
import { Command } from "commander";
import ora from "ora";
import { formatTime } from "../formatTime";

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

export function reposCommand(program: Command) {
  program
    .command("repos")
    .description(
      "Display all repositories that the user had worked on, with the duration of the work"
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
        if (user === null) {
          console.log(chalk.red("You don't have a keytime account yet."));
          console.log(chalk.red("Please run `keytime start` to create one."));
        } else {
          await showRepos(user!);
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
  const spinner = ora("Fetching repositories...").start(); // spinning animation
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
      spinner.fail(chalk.red("No repositories found. Start building!!"));
    } else {
      spinner.succeed(chalk.green("Your repositories are ready :)"));
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
    spinner.fail(chalk.red("Failed to fetch repositories"));
    console.error(error);
  }
}
