<script lang="ts" setup>
import Side from '@/layout/components/Sider.vue';
import Header from '@/layout/components/Header.vue';
</script>

<template>
  <el-progress
    v-bind="{
      class: 'progress',
      percentage: 100,
      showText: false,
      strokeLinecap: 'square',
    }"
  />
  <div class="layout-box">
    <div class="aside-box"><Side /></div>
    <div class="right-box">
      <div class="base-box header"><Header /></div>
      <div class="main-box"><router-view /></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.progress {
  width: 100%;
  position: fixed;
  left: 0;
  top: -5px;
}
.layout-box {
  background-color: #f8f8f8;
  height: 100vh;
  padding: 12px;
  display: flex;

  .aside-box {
    background-color: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    margin-right: 12px;
    border: 1px solid #eeeeee;
  }
  .right-box {
    height: 100%;
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    .header {
      margin-bottom: 12px;
      padding-top: 12px;
      padding-bottom: 12px;
    }

    .main-box {
      flex: 1;
      overflow: auto;
    }
  }
}
</style>
