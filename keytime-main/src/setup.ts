import chalk from "chalk";
import inquirer from "inquirer";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export async function getUser() {
  let user = await prisma.user.findFirst();
  if (!user) {
    console.log(chalk.yellow("Let's create your keytime account!"));
    await setup();
    user = await prisma.user.findFirst();
  }
  return user;
}

async function setup() {
  let answers: any;
  try {
    answers = await inquirer.prompt([
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
  } catch (error) {
    console.error(error);
    return;
  }

  const user = await prisma.user.create({
    data: {
      username: answers.username,
      timeInterval: answers.timeInterval,
    },
  });

  console.log(chalk.green("Keytime account created!"));

  try {
    await prisma.$disconnect();
  } catch (error) {
    console.error("Error disconnecting from Prisma:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}
