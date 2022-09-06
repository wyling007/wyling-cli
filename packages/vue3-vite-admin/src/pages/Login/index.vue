<script setup lang="ts">
import { useLogin } from '@/hooks';
import { icon } from '@/components';

const { loginForm, rules, loginHandler, loading } = useLogin();
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <div class="content">
        <div class="title">欢迎登陆</div>
        <el-form class="form" :model="loginForm" :rules="rules">
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              class="input"
              placeholder="请输入账号或邮箱"
              clearable
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              class="input"
              placeholder="请输入密码"
              type="password"
              clearable
            />
          </el-form-item>
          <el-form-item prop="isjizhu">
            <div class="option">
              <el-checkbox v-model="loginForm.isjizhu" label="记住我" />
              <el-link href="https://element.eleme.io" target="_blank">忘记密码</el-link>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" type="primary" @click="loginHandler" :loading="loading"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
        <div>
          <el-divider class="divider">第三方登陆</el-divider>
          <div class="third-party-box">
            <el-button type="primary" :icon="icon('zhifubao')">支付宝</el-button>
            <el-button :icon="icon('qq')">QQ</el-button>
            <el-button type="success" :icon="icon('weixin')">微信</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: gainsboro;
  background-image: url(@/assets/img/bg-img.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .login-box {
    width: 350px;
    // height: 500px;
    position: relative;
    z-index: 100;
    .content {
      width: 100%;
      height: 100%;
      background-color: #eeeeee;
      border-radius: 20px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.5);
      .title {
        font-family: 'Courier New', Courier, monospace;
        font-size: 30px;
        font-weight: 600;
      }
      .form {
        margin-top: 30px;
        width: 100%;
        .input {
          height: 45px;
          box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          :deep(.el-input__wrapper) {
            border-radius: 10px;
          }
        }
        .option {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 5px;
          color: black;
          :deep(.el-checkbox) {
            height: 20px;
          }
        }
      }

      .login-btn {
        border-radius: 15px;
        width: 100%;
        box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.5);
      }
      .divider {
        margin-top: 20px;
        :deep(.el-divider__text) {
          background-color: #eeeeee;
        }
      }
      .third-party-box {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        :deep(.el-button) {
          border-radius: 10px;
          box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.5);
          margin-bottom: 10px;
        }
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: #ebab62;
      border-radius: 20px;
      transform: translate(-50%, -50%) scale(1) rotate(-5deg);
      box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.5);
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: #157a64;
      border-radius: 20px;
      transform: translate(-50%, -50%) scale(1) rotate(5deg);
      box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
