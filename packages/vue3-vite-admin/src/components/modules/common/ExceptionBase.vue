<script lang="ts" setup>
import { routeNavigator } from '@/router';
import { icon } from '@/components';
import { computed } from 'vue';

interface Props {
  /** 异常类型 403 404 500 */
  type: '403' | '404' | '500';
}

const props = defineProps<Props>();

const currentStatus = computed(() => {
  switch (props.type) {
    case '403':
      return { icon: icon('403'), msg: 'Sorry，你没有访问权限！' };
    case '404':
      return { icon: icon('404'), msg: 'Sorry，没有找到内容！' };
    case '500':
      return { icon: icon('icon-500'), msg: 'Sorry，系统报错了~' };
    default:
      return { icon: icon('404'), msg: 'Sorry，没有找到内容！' };
  }
});

/** 回到首页按钮点击事件 */
const goBackHomeBtnClickHandler = () => {
  routeNavigator.home();
};
</script>

<template>
  <el-result class="exception-box" v-bind="{ title: props.type, subTitle: currentStatus.msg }">
    <template #icon>
      <currentStatus.icon class="icon" />
    </template>
    <template #extra>
      <el-button type="primary" @click="goBackHomeBtnClickHandler">回到首页</el-button>
    </template>
  </el-result>
</template>

<style scoped lang="scss">
.exception-box {
  height: 100%;
  .icon {
    font-size: 300px;
  }
}
</style>
