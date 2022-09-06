import { onMounted, ref } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import * as echarts from 'echarts';
import { debounce } from 'lodash';

export const useEcharts = (initOption: echarts.EChartsOption) => {
  /** 用于绑定echarts的dom */
  const echartsRef = ref<HTMLDivElement>();
  /** echarts实例 */
  const echartsInstance = ref<echarts.ECharts>();

  /** 设置配置 */
  const setOption = () => {
    if (!echartsInstance.value && echartsRef.value) {
      echartsInstance.value = echarts.init(echartsRef.value);
    }
    echartsInstance.value?.setOption(initOption);
  };

  //首次加载设置配置
  onMounted(setOption);

  //容器比例发生变化,重绘
  useResizeObserver(
    echartsRef,
    debounce(() => {
      echartsInstance.value?.resize();
    }),
  );

  return {
    echartsRef,
    echartsInstance,
  };
};
