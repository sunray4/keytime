import inquirer from "inquirer";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export async function setup() {
  console.log("You haven't setup your keytime account yet!! Let's do it now.");
  let answers: any;
  try {
    answers = await inquirer.prompt([
      {
        type: "input",
        name: "username",
        message: "Enter your username: ",
      },
      {
        type: "number",
        name: "timeInterval",
        message: "Choose your preferred heartbeat time interval (default: 2): ",
        choices: [
          { name: "1 minutes", value: 1 },
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
  console.log(user);

  try {
    await prisma.$disconnect();
  } catch (error) {
    console.error("Error disconnecting from Prisma:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}
