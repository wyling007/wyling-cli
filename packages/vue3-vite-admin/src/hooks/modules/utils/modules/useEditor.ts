import { onMounted, ref, shallowRef } from 'vue';
import { createEditor, IDomEditor, createToolbar, Toolbar } from '@wangeditor/editor';
import '@wangeditor/editor/dist/css/style.css';
import {
  ICreateEditorOption,
  ICreateToolbarOption,
} from '@wangeditor/editor/dist/editor/src/create';

export const useEditor = (
  editorOption?: Partial<ICreateEditorOption>,
  toolbarOption?: Omit<ICreateToolbarOption, 'editor' | 'selector'>,
) => {
  /** wangEditor容器 */
  const editorContainerRef = shallowRef<HTMLDivElement>();

  /** 工具栏容器 */
  const toolbarContainerRef = ref<HTMLDivElement>();

  /** wangEditor实例 */
  const editorInstance = ref<IDomEditor>();

  /** 工具栏实例 */
  const toolbarInstance = ref<Toolbar>();

  onMounted(() => {
    editorInstance.value = createEditor({
      selector: editorContainerRef.value,
      ...editorOption,
    });
    if (toolbarContainerRef.value) {
      toolbarInstance.value = createToolbar({
        editor: editorInstance.value,
        selector: toolbarContainerRef.value,
        ...toolbarOption,
      });
    }
  });

  return {
    editorContainerRef,
    editorInstance,
    toolbarContainerRef,
    toolbarInstance,
  };
};
