import { defineComponent, ref } from 'vue';
import { Icon, Dialog } from '@/components';
import { ElButton, ElDialog } from 'element-plus';
import { useComponent } from '@/hooks';
import AddUserDialog from './AddUserDialog.vue';
import { defineStyle } from './linStyle';
import { userStore } from '@/store/modules/user copy';

export const AddUserDialogTest = defineComponent({
  setup(props, ctx) {
    const SetupReturn = {
      /** 显示标志 */
      visable: ref(true),
      /** 呼叫弹窗 */
      show: () => {
        SetupReturn.visable.value = true;
      },
      /** 新增弹窗 */
      AddUserDialogRef: useComponent(AddUserDialog),
    };

    ctx.expose(SetupReturn);
    return SetupReturn;
  },
  render() {
    return (
      <Dialog
        onUpdate:modelValue={(newValue) => {
          this.visable = newValue;
        }}
        modelValue={this.visable}
      >
        <div class={AddUserDialogStyle.dialogBox}>
          <ElButton size={'large'} type={'success'} onClick={this.AddUserDialogRef?.show}>
            6666123{userStore.userInfo}
          </ElButton>
          <Icon iconName={'chajian'} />
        </div>
      </Dialog>
    );
  },
});

const AddUserDialogStyle = defineStyle({
  dialogBox: ['ring-0', 'ring-offset-0', 'bg-black'],
});
