<script lang="ts" setup>
import { computed, onBeforeUnmount, shallowRef } from 'vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import { IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import '@wangeditor/editor/dist/css/style.css';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    readOnly?: boolean;
    placeholder?: string;
    mode?: string;
  }>(),
  {
    readOnly: false,
    placeholder: '请输入内容...',
    mode: 'default',
  },
);

const emits = defineEmits<{
  (event: 'update:modelValue', modelValue: string): void;
}>();

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

/** 工具栏配置 */
const toolbarConfig: Partial<IToolbarConfig> = {};

/** 编辑器配置 */
const editorConfig: Partial<IEditorConfig> = {
  placeholder: props.placeholder,
  readOnly: props.readOnly,
  MENU_CONF: {
    uploadImage: {
      // 单个文件的最大体积限制，默认为 2M
      maxFileSize: 1 * 1024, // 1M
      // 最多可上传几个文件，默认为 100
      maxNumberOfFiles: 1,
      customUpload: async (
        file: File,
        insertFn: (src: string, alt: string, herf?: string) => void,
      ) => {
        const url = URL.createObjectURL(file);
        insertFn(url, file.name);
      },
    },
    uploadVideo: {
      customUpload: async (file: File, insertFn: (src: string, poster?: string) => void) => {
        const url = URL.createObjectURL(file);
        insertFn(url);
      },
    },
  },
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  editorRef.value?.destroy();
});

const handleCreated: IEditorConfig['onCreated'] = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

const valueHtml = computed({
  get() {
    return props.modelValue;
  },
  set(newValue: string) {
    emits('update:modelValue', newValue);
  },
});
</script>

<template>
  <div class="editor-box">
    <Toolbar
      class="toolbar"
      v-show="!props.readOnly"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="props.mode"
    />
    <Editor
      class="editor"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="props.mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<style scoped lang="scss">
.editor-box {
  display: flex;
  flex-direction: column;
  .editor {
    flex: 1;
    overflow: auto;
  }
}
</style>
