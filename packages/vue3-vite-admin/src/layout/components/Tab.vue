<script lang="ts" setup>
import { ref } from 'vue';
import { ElTabs, TabPanelName } from 'element-plus';

let tabIndex = 2;
const editableTabsValue = ref('2');
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
]);

const handleTabsEdit: InstanceType<typeof ElTabs>['onEdit'] = (targetName, action) => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`;
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    });
    editableTabsValue.value = newTabName;
  } else if (action === 'remove') {
    const tabs = editableTabs.value;
    let activeName = editableTabsValue.value;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          }
        }
      });
    }

    editableTabsValue.value = activeName;
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
  }
};
</script>

<template>
  <el-tabs v-model="editableTabsValue" type="card" editable class="tab-box" @edit="handleTabsEdit">
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
.tab-box {
  height: 100%;
  background-color: #ffffff;
  margin: 0 6px;
  :deep(.el-tabs__header) {
    border-bottom: none !important;
  }
}
</style>
