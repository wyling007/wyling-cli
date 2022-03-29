#!/usr/bin/env node
//第一行其中#!/usr/bin/env node表示用node解析器执行本文件。

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
