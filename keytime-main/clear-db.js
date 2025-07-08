const { PrismaClient } = require("./generated/prisma");

const prisma = new PrismaClient();

async function clearData() {
  try {
    await prisma.projectEditor.deleteMany();
    await prisma.projectLanguage.deleteMany();
    await prisma.project.deleteMany();
    await prisma.editor.deleteMany();
    await prisma.language.deleteMany();
    await prisma.user.deleteMany();
    console.log("All data cleared successfully");
  } catch (error) {
    console.error("Error clearing data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

clearData();
