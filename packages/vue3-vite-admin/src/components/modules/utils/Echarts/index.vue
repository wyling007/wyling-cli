<script lang="ts" setup>
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { debounce, cloneDeep } from 'lodash';

const echartsRef = ref<HTMLDivElement>();
const echartsInstance = ref<echarts.ECharts>();

const props = defineProps<{
  option: EChartsOption;
}>();

/** 设置配置 */
const setOption = () => {
  if (!echartsInstance.value && echartsRef.value) {
    echartsInstance.value = echarts.init(echartsRef.value);
  }
  echartsInstance.value?.setOption(cloneDeep(props.option));
};

//首次加载设置配置
onMounted(setOption);

//配置变化,重新设置配置
watch(props.option, setOption);

//容器比例发生变化,重绘
const debounceSetOption = debounce(() => {
  echartsInstance.value?.resize();
});
onMounted(() => {
  window.addEventListener('resize', debounceSetOption);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', debounceSetOption);
});
</script>

<template>
  <div class="echarts-container" ref="echartsRef"></div>
</template>

<style scoped lang="scss">
.echarts-container {
  width: 100%;
  height: 100%;
}
</style>
