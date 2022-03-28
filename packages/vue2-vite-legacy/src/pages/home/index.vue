<script setup lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import HelloWorld from "../../components/HelloWorld/index.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Index extends Vue {}
</script>


<template>
  <div>
    <HelloWorld />
  </div>
</template>

<style scoped>
</style>
