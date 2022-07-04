import legacy from '@vitejs/plugin-legacy';

/** 兼容传统浏览器插件 */
export const viteLegacy = legacy({
  targets: ['ie >= 11'],
  additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
});
