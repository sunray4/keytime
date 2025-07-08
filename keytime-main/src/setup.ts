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
  } catch (error) {
    console.error(error);
    return;
  }

  const user = await prisma.user.create({
    data: {
      username: answers.username,
      maxInterval: answers.maxInterval,
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
