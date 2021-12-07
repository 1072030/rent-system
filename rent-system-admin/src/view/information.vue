<template>
  <div class="container">
    <div class="title">
      <div>遊玩日期 :</div>
      <div>遊戲場次 :</div>
      <div>需求人數 :</div>
      <div>請再次確認您預約的場次 →←</div>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="姓名"
        label="姓名"
        placeholder="姓名"
        :rules="[{ required: true, message: '請填寫姓名' }]"
      />
      <van-field
        v-model="phone"
        type="password"
        name="聯絡電話"
        label="聯絡電話"
        placeholder="聯絡電話"
        :rules="[{ required: true, message: '請填寫聯絡電話' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="E-mail"
        label="E-mail"
        placeholder="E-mail"
        :rules="[{ required: true, message: '請填寫E-mail' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="遊玩人數"
        label="遊玩人數(3~5人)"
        placeholder="遊玩人數(3~5人)"
        :rules="[{ required: true, message: '請填寫遊玩人數' }]"
      />
      <van-field
        v-model="message"
        rows="1"
        autosize
        label="其他問題提問"
        type="textarea"
        placeholder="留言輸入"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    console.log("success");
  },
});
</script>
<style lang="scss">
.container {
  width: 70%;
  margin-left: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  > form {
    margin-top: 5%;
  }
  .title {
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    background-color: lightgray;
    padding: 5%;
    > div {
      flex: 1;
      font-size: 20px;
    }
  }
}
</style>
