<script lang="ts">
import { Component } from 'vue-property-decorator';
import Vue from 'vue';
console.log(123);

@Component({})
export default class Index extends Vue {}
</script>

<template>
  <router-view></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
