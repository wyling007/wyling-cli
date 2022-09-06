<script lang="ts" setup>
import { useEditor } from '@/hooks';
import { watch } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    readOnly?: boolean;
    placeholder?: string;
  }>(),
  {
    readOnly: false,
    placeholder: '请输入内容...',
  },
);

const emits = defineEmits<{
  (event: 'update:modelValue', modelValue: string): void;
}>();

//编辑模式
const { editorContainerRef, toolbarContainerRef, editorInstance } = useEditor(
  {
    html: props.modelValue,
    config: {
      placeholder: props.placeholder,
      readOnly: props.readOnly,
      onChange: (editor) => {
        const html = editor.getHtml();
        emits('update:modelValue', html);
      },
      MENU_CONF: {
        uploadImage: {
          // 单个文件的最大体积限制，默认为 2M
          maxFileSize: 1 * 1024, // 1M
          // 最多可上传几个文件，默认为 100
          maxNumberOfFiles: 1,
          async customUpload(file: File, insertFn: (...arg: unknown[]) => void) {
            console.log(editorInstance.value?.getElemsByType('image'));
            const url = URL.createObjectURL(file);
            insertFn(url, file.name, 'href');
          },
        },
        uploadVideo: {
          async customUpload(file: File, insertFn: (...arg: unknown[]) => void) {
            const url = URL.createObjectURL(file);
            insertFn(url);
          },
        },
      },
    },
  },
  {
    config: {
      modalAppendToBody: true,
      toolbarKeys: [
        'bold', // 加粗
        'italic', // 斜体
        'through', // 删除线
        'underline', // 下划线
        // 'bulletedList', // 无序列表
        // 'numberedList', // 有序列表
        // 'color', // 文字颜色
        'insertLink', // 插入链接
        'fontSize', // 字体大小
        'lineHeight', // 行高
        'uploadImage', // 上传图片
        'delIndent', // 缩进
        'indent', // 增进
        'deleteImage', //删除图片
        'divider', // 分割线
        // 'insertImage', // 网络图片
        // 'insertTable', // 插入表格
        'justifyCenter', // 居中对齐
        'justifyJustify', // 两端对齐
        'justifyLeft', // 左对齐
        'justifyRight', // 右对齐
        // 'undo', // 撤销
        // 'redo', // 重做
        // 'clearStyle', // 清除格式
        // 'fullScreen', // 全屏
      ],
    },
  },
);

watch(
  () => props.modelValue,
  (newValue) => {
    editorInstance.value?.setHtml(newValue);
  },
);
</script>

<template>
  <div class="editor-box">
    <div ref="toolbarContainerRef" class="toolbar" v-show="!props.readOnly"></div>
    <div ref="editorContainerRef" class="editor"></div>
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
