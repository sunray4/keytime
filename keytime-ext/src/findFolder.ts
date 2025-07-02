export function findFolder(folders: string[], path: string) {
  const folder = folders.find((folder) => path.includes(folder));
  if (folder === undefined) {
    return "";
  }
  return folder;
}
