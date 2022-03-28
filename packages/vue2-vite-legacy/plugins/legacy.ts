import legacy from '@vitejs/plugin-legacy';

/** 兼容传统浏览器插件 */
export default legacy({
  targets: ['ie >= 11'],
  additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
});
