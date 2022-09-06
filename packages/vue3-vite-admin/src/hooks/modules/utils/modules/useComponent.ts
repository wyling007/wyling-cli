import { getCurrentInstance, h, render, onBeforeUnmount, onBeforeMount, ref } from 'vue';

interface Constructor<P, T> {
  new (...args: unknown[]): {
    $props: P;
  } & T;
}

/**
 * 注册服务式组件
 * @param type 组件
 * @param props 组件参数
 * @returns 组件实例
 */
export const useComponent = <P, T>(type: Constructor<P, T>, props?: P) => {
  // 组件实例
  const instance = ref<T>();

  /** 组件vNode */
  const vNode = h(type, props);
  /** 当前组件实例 */
  const currentInstance = getCurrentInstance();
  /** 组件容器 */
  const container = document.createElement('div');
  // 将当前组件实例注入组件vNode
  vNode.appContext = currentInstance?.appContext || null;
  // 将容器插入body
  document.body.appendChild(container);

  onBeforeMount(() => {
    // 向容器注入组件
    render(vNode, container);
    // render后设置组件实例的proxy
    instance.value = vNode.component?.exposed as T;
  });

  onBeforeUnmount(() => {
    // 组件卸载
    render(null, container);
    // 容器移除
    container.remove();
  });

  //返回组件暴露的方法
  return instance;
};
