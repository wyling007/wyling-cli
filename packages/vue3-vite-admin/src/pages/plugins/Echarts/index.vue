<script lang="ts" setup>
import { useClockEcharts, usePieEcharts } from '@/hooks';

//时钟
const { clockEchartsRef } = useClockEcharts();
//饼图
const { pieEchartsRef } = usePieEcharts();
</script>

<template>
  <div class="base-box echarts-box" ref="clockEchartsRef"></div>
  <div class="base-box echarts-box" ref="pieEchartsRef"></div>
</template>

<style scoped lang="scss">
.echarts-box {
  margin-bottom: 12px;
  height: calc(50% - 6px);
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
