"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFolder = findFolder;
function findFolder(folders, path) {
    const folder = folders.find(folder => path.includes(folder));
    return folder;
}
//# sourceMappingURL=findFolder.js.map