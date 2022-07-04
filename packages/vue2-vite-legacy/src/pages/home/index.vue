<script lang="ts">
import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import HelloWorld from '../../components/HelloWorld/index.vue';
import store from '../../store';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Index extends Vue {
  get title2() {
    return store.state.title;
  }

  handlerClick() {
    store.state.title = '4654646';
  }
}
</script>

<template>
  <div>
    <HelloWorld />
    {{ title2 }}
    <button @click="handlerClick">按钮</button>
  </div>
</template>

<style scoped></style>
