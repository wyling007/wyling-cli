import eslintPlugin from 'vite-plugin-eslint';

/** Eslint在vite中的插件配置 */
export const viteEslint = eslintPlugin({
  cache: false,
});
