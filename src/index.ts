import commander from 'commander';
import { cteateHandler, logVersion } from './command';

const instance = new commander.Command();

instance
  .command('create')
  .alias('c')
  .description('创建项目')
  .action(cteateHandler);

instance
  .command('version')
  .alias('v')
  .description('显示脚手架版本')
  .action(logVersion);

instance.parse(process.argv);
