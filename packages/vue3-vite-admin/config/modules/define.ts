import dayjs from 'dayjs';

/** 构建注入定义全局变量 */
export const viteDefine = {
  /** 项目构建时间 */
  PROJECT_BUILD_TIME: JSON.stringify(dayjs().format('YYYY-MM-DD HH:mm:ss')),
};
