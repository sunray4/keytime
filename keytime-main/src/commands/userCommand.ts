import chalk from "chalk";
import { Command } from "commander";
import ora from "ora";
import sliceAnsi from "slice-ansi";
import stringWidth from "string-width";
import { Prisma, PrismaClient } from "../../generated/prisma";
import { formatTime } from "../formatTime";
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
            printUser(user!);
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
  const asciiArt = [
    "                            ",
    "       ==+++++++++===       ",
    "      .=*@########*+=.      ",
    "      .=*%########*+=.      ",
    "      :=#%########*+=:      ",
    "      -=%%########**=-      ",
    "      -====++++++====-      ",
    "         :=++++++=:         ",
    "        ==++++++====        ",
    "        =+%#*****++=        ",
    "        =+*+++++++==        ",
    "        =-.-=++=-.-=        ",
    "           :====:           ",
  ];

  const username = chalk.cyan(`Username: ${user.username}`);
  const maxInterval = chalk.magenta(
    `Max Heartbeat Interval: ${user.maxInterval}`
  );
  const serverPid = chalk.green(`Server PID: ${user.serverPid}`);
  const editors = chalk.cyanBright(
    `Editors: ${user.editors
      .map((editor) => {
        return `${editor.name} (${formatTime(editor.timeSpent)})`;
      })
      .join(", ")}`
  );
  const languages = chalk.hex("ed7056")(
    `Languages: ${user.languages
      .map((language) => {
        return `${language.name} (${formatTime(language.timeSpent)})`;
      })
      .join(", ")}`
  );
  const lastProject = chalk.yellow(`Last Project: ${user.lastFolder}`);

  const terminalWidth = process.stdout.columns || 80;
  const textWidth = terminalWidth - asciiArt[0].length;

  if (terminalWidth < 42) {
    console.log(`\n${chalk.blue.bold("KEYTIME")}\n${chalk.dim(
      "**********"
    )}\n${username}\n${maxInterval}\n${serverPid}\n${editors}\n${languages}\n${lastProject}
    `);
  }

  let text = ["", "", chalk.blue.bold("KEYTIME"), chalk.dim("**********")];

  text = splitText(text, username, textWidth);
  text = splitText(text, maxInterval, textWidth);
  text = splitText(text, serverPid, textWidth);
  text = splitText(text, editors, textWidth);
  text = splitText(text, languages, textWidth);
  text = splitText(text, lastProject, textWidth);

  for (let i = 0; i < Math.max(asciiArt.length, text.length); i++) {
    const asciiLine = asciiArt[i] ?? " ".repeat(asciiArt[0].length);
    const textLine = text[i] ?? "";
    console.log(`${asciiLine}${textLine}`);
  }
}

function splitText(text: string[], cur: string, textWidth: number): string[] {
  while (stringWidth(cur) > textWidth) {
    text.push(sliceAnsi(cur, 0, textWidth));
    cur = sliceAnsi(cur, textWidth);
  }
  text.push(cur);
  return text;
}
