const { PrismaClient } = require("./generated/prisma");

const prisma = new PrismaClient();

async function clearData() {
  try {
    await prisma.user.deleteMany();
    await prisma.project.deleteMany();
    await prisma.editor.deleteMany();
    console.log("All data cleared successfully");
  } catch (error) {
    console.error("Error clearing data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

clearData();
