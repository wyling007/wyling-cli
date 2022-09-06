<script lang="ts" setup>
import { useMap } from '@/hooks';
//地图
const { mapRef, loading } = useMap();
</script>

<template>
  <div class="base-box map-box">
    <div ref="mapRef" class="amap" v-loading="loading"></div>
  </div>
</template>

<style scoped lang="scss">
.map-box {
  height: 100%;
  .amap {
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
}
</style>
