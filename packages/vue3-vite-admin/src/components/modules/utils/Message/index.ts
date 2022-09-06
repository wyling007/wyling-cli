import { ElMessage } from 'element-plus';

/** 消息组件统一封装 */
export class Message {
  /** 成功消息 */
  static success(msg: string) {
    return ElMessage.success(msg);
  }
  /** 失败消息 */
  static error(msg: string) {
    return ElMessage.error(msg);
  }
  /** 普通消息 */
  static info(msg: string) {
    return ElMessage.info(msg);
  }
}
