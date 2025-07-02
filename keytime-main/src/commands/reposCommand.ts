import { Prisma, PrismaClient } from "../../generated/prisma";

import chalk from "chalk";
import { Command } from "commander";
import ora from "ora";
import { setup } from "../setup";

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
        console.log("user:", user);
        if (user === null) {
          await setup();
        } else {
          await showRepos(user!);
        }
      } catch (error) {
        console.error(
          "An error occurred:",
          error instanceof Error ? error.message : String(error)
        );
      }
    });
}

async function showRepos(user: User) {
  const spinner = ora("Fetching repositories...").start(); // spinning animation
  try {
    const repos = await user.projects.map((project) => {
      return {
        name: project.name,
        timeSpent: project.timeSpent,
        languages: project.languages.map((language) => {
          return {
            id: language.languageId,
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
    const langs = await prisma.language.findMany({
      where: {
        id: {
          in: repos.flatMap((repo) => repo.languages.map((lang) => lang.id)),
        },
      },
    });

    if (repos.length === 0) {
      spinner.fail(chalk.red("No repositories found. Start building!!"));
    } else {
      spinner.succeed(chalk.green("Your repositories are ready :)"));
      console.log(repos);
    }
  } catch (error) {
    spinner.fail(chalk.red("Failed to fetch repositories"));
  }
}
