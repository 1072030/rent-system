<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="姓名"
      label="姓名"
      placeholder="姓名"
      :rules="[{ required: true, message: '請填寫姓名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密碼"
      label="密碼"
      placeholder="密碼"
      :rules="[{ required: true, message: '請填寫密碼' }]"
    />
    <div style="margin: 16px">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    console.log("success");
  },
});
</script>
