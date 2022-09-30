<script setup lang="ts">
import { Edit, Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
import AddUserDialog from './components/AddUserDialog.vue';
import { useUserList, useDeleteUser, useComponent } from '@/hooks';

//用户列表
const { loading, userList, total, searchFrom, getUserList, search, resetSearch } = useUserList();

/** 搜索模块显示标志 */
const searchShow = ref(true);

/** 新增用户弹窗实例 */
const AddUserDialogRef = useComponent(AddUserDialog, {
  onSuccessCallback: getUserList,
});

//删除逻辑
const { confirmDeleteUser } = useDeleteUser({
  successCallback: getUserList,
});
</script>

<template>
  <div class="base-box user-manager-box">
    <div class="title">用户管理</div>
    <div class="search-box" v-show="searchShow">
      <el-form :inline="true" :model="searchFrom" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input v-model="searchFrom.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button type="primary" @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="control-box">
      <div class="left">
        <el-button type="success" @click="AddUserDialogRef?.show">新增用户</el-button>
        <el-button type="danger">批量删除</el-button>
      </div>
      <div class="right">
        <el-button :icon="Search" circle @click="searchShow = !searchShow" />
        <el-button type="primary" :icon="Edit" circle @click="getUserList" />
      </div>
    </div>
    <div class="table-box">
      <el-table
        :data="userList"
        :header-row-style="{
          height: '60px',
        }"
        height="100%"
        stripe
        v-loading="loading"
      >
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column type="index" label="序号" width="60" align="center" />
        <el-table-column prop="username" label="用户名" width="180" align="center" />
        <el-table-column prop="phone" label="手机号" align="center" />
        <el-table-column prop="email" label="邮箱" align="center" />
        <el-table-column fixed="right" label="操作" width="200" align="center">
          <template #default="scope">
            <el-button type="primary" @click="scope">修改</el-button>
            <el-button type="danger" @click="confirmDeleteUser(scope.row.id)"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-box">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        v-model:page-size="searchFrom.pageSize"
        v-model:current-page="searchFrom.pageNum"
        :total="total"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-manager-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 18px;
  }
  .search-box {
    margin-bottom: 0;
  }
  .control-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .table-box {
    flex: 1;
    overflow: hidden;
    margin-bottom: 12px;
    border: 1px solid #eeeeee;
    border-radius: 12px;
  }
  .pagination-box {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
