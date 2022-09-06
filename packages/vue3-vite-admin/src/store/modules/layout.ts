import { defineStore } from 'pinia';

type LayoutStoreModel = {
  /** 侧边菜单栏收缩 */
  leftMenuCollapse: boolean;
  /** 侧边栏展开宽度 */
  leftMenuWidth: number;
  /** 主题颜色 */
  primaryColor: string;
};

export const useLayoutStore = defineStore('Layout', {
  state: (): LayoutStoreModel => ({
    leftMenuCollapse: false,
    leftMenuWidth: 200,
    primaryColor: '#1890FF',
  }),
  actions: {},
});
