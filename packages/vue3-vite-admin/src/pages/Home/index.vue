<script lang="ts" setup>
import { useClockEcharts, usePieEcharts, useMap } from '@/hooks';
//地图
const { mapRef, loading } = useMap();
//时钟
const { clockEchartsRef } = useClockEcharts();
//饼图
const { pieEchartsRef } = usePieEcharts();
</script>

<template>
  <div class="home-box">
    <div class="base-box first-box">
      <div class="base-box echarts-box" ref="clockEchartsRef"></div>
      <div class="base-box echarts-box" ref="pieEchartsRef"></div>
    </div>
    <div class="base-box second-box" ref="mapRef" v-loading="loading"></div>
  </div>
</template>

<style scoped lang="scss">
.home-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  .first-box {
    display: flex;
    justify-content: space-between;
    .echarts-box {
      width: calc(50% - 9px);
      height: 400px;
    }
  }
  .second-box {
    flex: 1;
    overflow: hidden;
    margin-top: 12px;
  }
}
</style>
