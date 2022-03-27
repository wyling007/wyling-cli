import commander from "commander";
import { cteateHandler } from "./command";

const instance = new commander.Command();

instance
  .command("create")
  .alias("c")
  .description("创建项目")
  .action(cteateHandler);

instance.parse(process.argv);
