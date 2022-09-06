<script lang="ts" setup>
import { useLayoutStore } from '@/store';
import { Icon } from '@/components';

const layoutStore = useLayoutStore();
</script>

<template>
  <el-menu
    class="left-menu-box"
    router
    :collapse="layoutStore.leftMenuCollapse"
    :collapse-transition="false"
    default-active="/UserManager"
  >
    <div class="title-box">
      <el-avatar class="logo" size="small">L</el-avatar>
      <div class="title" v-show="!layoutStore.leftMenuCollapse">wyling管理系统</div>
    </div>
    <el-menu-item index="/home">
      <Icon class="menu-icon" v-bind="{ iconName: 'shouye' }" />
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="11">
      <template #title>
        <Icon class="menu-icon" v-bind="{ iconName: 'chajian' }" />
        <span>插件</span>
      </template>
      <el-menu-item index="/map">
        <Icon class="menu-icon" v-bind="{ iconName: 'ditu' }" />
        <span>地图</span>
      </el-menu-item>
      <el-menu-item index="/echarts">
        <Icon class="menu-icon" v-bind="{ iconName: 'ditu' }" />
        <span>图表</span>
      </el-menu-item>
      <el-menu-item index="/editor">
        <Icon class="menu-icon" v-bind="{ iconName: 'ditu' }" />
        <span>富文本编辑器</span>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <Icon class="menu-icon" v-bind="{ iconName: 'yichang' }" />
        <span>异常页</span>
      </template>
      <el-menu-item index="/403">
        <Icon class="menu-icon" v-bind="{ iconName: '403' }" />
        <span>异常页403</span>
      </el-menu-item>
      <el-menu-item index="/404">
        <Icon class="menu-icon" v-bind="{ iconName: '404' }" />
        <span>异常页404</span>
      </el-menu-item>
      <el-menu-item index="/500">
        <Icon class="menu-icon" v-bind="{ iconName: 'icon-500' }" />
        <span>异常页500</span>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <Icon class="menu-icon" v-bind="{ iconName: 'xitongguanli' }" />
        <span>系统管理</span>
      </template>
      <el-menu-item index="/PermissionManager">
        <Icon class="menu-icon" v-bind="{ iconName: 'quanxianguanli' }" />
        <span>权限管理</span>
      </el-menu-item>
      <el-menu-item index="/RoleManager">
        <Icon class="menu-icon" v-bind="{ iconName: 'jueseguanli' }" />
        <span>角色管理</span>
      </el-menu-item>
      <el-menu-item index="/UserManager">
        <Icon class="menu-icon" v-bind="{ iconName: 'yonghuguanli' }" />
        <span>用户管理</span>
      </el-menu-item>
      <el-menu-item index="/RouteManager">
        <Icon class="menu-icon" v-bind="{ iconName: 'luyouguanli' }" />
        <span>路由管理</span>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/about">
      <Icon class="menu-icon" v-bind="{ iconName: 'guanyu' }" />
      <template #title>关于</template>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss">
.el-menu {
  border-right: none !important;
}
.left-menu-box {
  height: 100%;
  .menu-icon {
    font-size: 18px;
    margin-left: 3px;
    margin-right: 6px;
  }
  .title-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px;
    font-size: 18px;
    color: v-bind('layoutStore.primaryColor');
    .logo {
      background-color: v-bind('layoutStore.primaryColor');
    }
    .title {
      margin-left: 6px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .el-sub-menu,
  .el-menu-item {
    min-width: calc(v-bind('layoutStore.leftMenuWidth') * 1px);
  }
}
</style>
