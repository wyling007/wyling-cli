import path from "path";
import fs from "fs-extra";

export const getPackagesPath = () => path.resolve(__dirname, "../../packages");

export const getProjectPath = (projectName: string) =>
  path.resolve(getPackagesPath(), projectName);

export const isEmptyDir = (path: string) => {
  return !fs.existsSync(path);
};
