import inquirer from "inquirer";
import fs from "fs-extra";
import { getPackagesPath, getProjectPath, isEmptyDir } from "../../utils/path";
import path from "path";

export const cteateHandler = async () => {
  //读取packages下项目名称
  const projectDirs = fs.readdirSync(getPackagesPath());
  //用户表单配置
  const questions: inquirer.QuestionCollection<
    | {
        projectType: string;
        isCreateDir: false;
      }
    | {
        projectType: string;
        isCreateDir: true;
        projectName: string;
      }
  > = [
    {
      type: "list",
      name: "projectType",
      message: "请选择要创建的项目:",
      choices: projectDirs,
    },
    {
      type: "confirm",
      name: "isCreateDir",
      message: "是否创建一个文件夹储存此项目?",
      default: true,
    },
    {
      when: (answer) => answer.isCreateDir,
      type: "input",
      name: "projectName",
      message: "请输入你的项目名称:",
      default: "wyling-project",
    },
  ];
  //用户表单返回结果
  const userLike = await inquirer.prompt(questions);
  //根据结果进行相应操作
  if (userLike.isCreateDir) {
    const targetDir = path.resolve(process.cwd(), userLike.projectName);
    if (isEmptyDir(targetDir)) {
      fs.copySync(getProjectPath(userLike.projectType), targetDir);
    } else {
      console.error("已存在同名目录,项目创建失败");
    }
  } else {
    fs.copySync(getProjectPath(userLike.projectType), process.cwd());
  }
};
