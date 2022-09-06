<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue';
import { useLayoutStore, useUserStore } from '@/store';
import { useLogout } from '@/hooks';
import { icon } from '@/components';

const layoutStore = useLayoutStore();
const userStore = useUserStore();

/** 切换左侧菜单栏状态 */
const changeLeftMenuStatus = () => {
  layoutStore.leftMenuCollapse = !layoutStore.leftMenuCollapse;
};

const {
  /** 退出登录 */
  logout,
} = useLogout();
</script>

<template>
  <div class="header-box">
    <div class="left">
      <el-button
        v-bind="{
          type: 'primary',
          size: 'small',
          onClick: changeLeftMenuStatus,
          icon: layoutStore.leftMenuCollapse ? icon('xiangyou') : icon('xiangzuo'),
        }"
      />
    </div>
    <div class="right">
      <el-dropdown>
        <div class="userinfo-box">
          <el-avatar
            shape="square"
            :size="30"
            src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
          />
          <span class="name">{{ userStore.userInfo?.username }}</span>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right {
    .userinfo-box {
      display: flex;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      .name {
        margin-left: 6px;
      }
    }
  }
}
</style>
