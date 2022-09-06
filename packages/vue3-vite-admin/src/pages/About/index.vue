<script setup lang="ts">
import packageJson from '@/../package.json';
/** 最后构建时间 */
const latestBuildTime = PROJECT_BUILD_TIME;
/** 生成环境依赖数组 */
const dependenciesEntries = Object.entries(packageJson.dependencies);
/** 开发环境依赖 */
const devDependenciesEntries = Object.entries(packageJson.devDependencies);
</script>

<template>
  <div class="base-box card-box" shadow="always">
    <el-descriptions title="项目信息" :column="2" border>
      <el-descriptions-item>
        <template #label>
          <div>版本</div>
        </template>
        <el-tag>{{ packageJson.version }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div>最后编译时间</div>
        </template>
        <el-tag>{{ latestBuildTime }}</el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </div>
  <div class="base-box card-box" shadow="always">
    <el-descriptions title="生成环境依赖" :column="3" border>
      <el-descriptions-item v-for="item in dependenciesEntries" :key="item[0]">
        <template #label>
          <div>{{ item[0] }}</div>
        </template>
        <el-tag>{{ item[1] }}</el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </div>
  <div class="base-box card-box" shadow="always">
    <el-descriptions title="开发环境依赖" :column="3" border>
      <el-descriptions-item v-for="item in devDependenciesEntries" :key="item[0]">
        <template #label>
          <div>{{ item[0] }}</div>
        </template>
        <el-tag>{{ item[1] }}</el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped lang="scss">
.card-box {
  margin-bottom: 12px;
}
</style>
