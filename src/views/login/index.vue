<template>
  <div class="flex w-full h-full login">
    <div class="flex flex-col w-1/2 bg py-[50px] justify-center">
      <div
        class="flex flex-col items-center justify-center animate__animated animate__bounceInLeft"
      >
        <img :src="loginBoxBg" alt="" srcset="" class="w-[368px] h-[190px]" />
        <br />
        <br />
        <p class="flex items-center m-0 text-white text-size-24px">
          <!-- text-[50px] -->
          <SvgIcon :size="50" name="logo-icon" class="relative top-6px mr-[20px]" />
          <b class="mt-[10px]">Vue3 模板 </b>
        </p>
        <div class="text-white mt-10px">当前版本：{{ pkg.version }}</div>
      </div>
    </div>
    <div class="flex flex-col flex-1 LoginFormBox animate__animated animate__bounceInRight">
      <div class="w-3/5 h-1/3"></div>
      <div class="box w-[400px] h-2/5 ml-[50px]">
        <h1 class="mb-12px text-size-30px">登录表单</h1>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import loginBoxBg from '@assets/svg/login-box-bg.svg'
const { pkg } = __APP_INFO__
</script>
<style lang="less" scoped>
.login {
  .bg {
    background-image: url(@/assets/svg/login-bg.svg);
    background-size: auto 100%;
    background-position: 100%;
    background-repeat: no-repeat;
  }
}
[data-theme='dark'] {
  .login {
    background-color: #293146;
    .bg {
      background-image: url(@/assets/svg/login-bg-dark.svg) !important;
    }
  }
}
</style>
