<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";

@Component({})
export default class Index extends Vue {}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
