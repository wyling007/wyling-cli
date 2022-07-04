import eslintPlugin from 'vite-plugin-eslint';

/** Eslint在vite中的插件配置 */
export const viteEslint = eslintPlugin({
  cache: false,
  include: ['src/**/*.ts', 'src/**/*.d.ts', 'src/**/*.tsx', 'src/**/*.vue'],
});
