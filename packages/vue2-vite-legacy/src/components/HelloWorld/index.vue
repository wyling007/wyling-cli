<script setup lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";

@Component({})
export default class Index extends Vue {
  test: string = "自组建";
}
</script>


<template>
  <div class="helloWorld-box">
    <img src="../../assets/logo.png" alt="" />
    <span>恭喜你！成功用上了兼容ie11的vue2基础框架</span>
  </div>
</template>

<style scoped>
.helloWorld-box {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
