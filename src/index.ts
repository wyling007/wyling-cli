#!/usr/bin/env node
//第一行其中#!/usr/bin/env node表示用node解析器执行本文件。

import commander from 'commander';
import { cteateHandler, getVersion } from './command';

const instance = new commander.Command();

instance.version(getVersion());

instance
  .command('create')
  .alias('c')
  .description('创建项目')
  .action(cteateHandler);

instance.parse(process.argv);
