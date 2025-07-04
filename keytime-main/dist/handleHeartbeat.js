"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHeartbeat = handleHeartbeat;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const hbInterval = 1000 * 60 * 2;
const maxInterval = 1000 * 60 * 15;
async function handleHeartbeat(message) {
    console.log("handling heartbeat...");
    const { timestamp, folder, lang, editor } = message;
    let lastHeartbeat = BigInt(0);
    const user = await prisma.user.findFirst({
        include: {
            editors: true,
            projects: true,
            languages: true,
        },
    });
    if (user) {
        lastHeartbeat = user.lastHeartbeat;
        if (lastHeartbeat != BigInt(0) &&
            BigInt(timestamp) - lastHeartbeat <= maxInterval) {
            const timeSpent = BigInt(timestamp) - lastHeartbeat;
            // update project stats
            let project = user.projects.find((p) => p.name === user.lastFolder);
            if (!project) {
                project = await prisma.project.create({
                    data: {
                        name: user.lastFolder,
                        author: { connect: { id: user.id } },
                        timeSpent: timeSpent,
                    },
                });
            }
            else {
                await prisma.project.update({
                    where: { id: project.id },
                    data: { timeSpent: project.timeSpent + timeSpent },
                });
            }
            // update language stats
            let language = user.languages.find((l) => l.name === user.lastLang);
            if (!language) {
                language = await prisma.language.create({
                    data: {
                        name: user.lastLang,
                        timeSpent: timeSpent,
                        user: { connect: { id: user.id } },
                    },
                });
            }
            else {
                await prisma.language.update({
                    where: { id: language.id },
                    data: { timeSpent: language.timeSpent + timeSpent },
                });
            }
            // update project language stats
            const projectWithLang = await prisma.project.findUnique({
                where: { id: project.id },
                include: { languages: true },
            });
            let projectLanguage = projectWithLang.languages.find((l) => l.languageId === language.id);
            if (!projectLanguage) {
                projectLanguage = await prisma.projectLanguage.create({
                    data: {
                        name: language.name,
                        project: { connect: { id: project.id } },
                        language: { connect: { id: language.id } },
                        timeSpent: timeSpent,
                    },
                });
            }
            else {
                await prisma.projectLanguage.update({
                    where: { id: projectLanguage.id },
                    data: { timeSpent: projectLanguage.timeSpent + timeSpent },
                });
            }
            // update editor stats
            let editor = user.editors.find((e) => e.name === user.lastEditor);
            if (!editor) {
                editor = await prisma.editor.create({
                    data: {
                        name: user.lastEditor,
                        timeSpent: timeSpent,
                        user: { connect: { id: user.id } },
                        project: { connect: { id: project.id } },
                    },
                });
            }
            else {
                await prisma.editor.update({
                    where: { id: editor.id },
                    data: { timeSpent: editor.timeSpent + timeSpent },
                });
            }
        }
        // update database user info
        await prisma.user.update({
            where: { id: user.id },
            data: {
                lastHeartbeat: timestamp,
                lastFolder: folder,
                lastLang: lang,
                lastEditor: editor,
            },
        });
        const newUser = await prisma.user.findUnique({
            where: { id: user.id },
            include: {
                projects: true,
                languages: true,
                editors: true,
            },
        });
        console.log("heartbeat updated");
        console.log("user:", newUser, "\n");
    }
}
//# sourceMappingURL=handleHeartbeat.js.map