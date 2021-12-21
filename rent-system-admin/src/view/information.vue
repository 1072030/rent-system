<template>
  <div class="container">
    <div class="title">
      {{ Info }}
      <div>遊玩日期 : {{ Info.date }}</div>
      <div>遊戲場次 : {{ Info.session }}</div>
      <div>需求人數 : 3~5人</div>
      <div>請再次確認您預約的場次 →{{ Info.title }}←</div>
    </div>
    <van-form @submit="onSubmit" v-model="profile">
      <van-field
        v-model="profile.username"
        name="姓名"
        label="姓名"
        placeholder="姓名"
        :rules="[{ required: true, message: '請填寫姓名' }]"
      />
      <van-field
        v-model="profile.phone"
        type="phone"
        name="聯絡電話"
        label="聯絡電話"
        placeholder="聯絡電話"
        :rules="[{ required: true, message: '請填寫聯絡電話' }]"
      />
      <van-field
        v-model="profile.email"
        type="email"
        name="E-mail"
        label="E-mail"
        placeholder="E-mail"
        :rules="[{ required: true, message: '請填寫E-mail' }]"
      />
      <van-field
        v-model="profile.group"
        type="group"
        name="遊玩人數"
        label="遊玩人數(3~5人)"
        placeholder="遊玩人數(3~5人)"
        :rules="[{ required: true, message: '請填寫遊玩人數' }]"
      />
      <van-field
        v-model="profile.message"
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
import { defineComponent, ref, toRefs } from "vue";

export default defineComponent({
  props: {
    Info: Object,
  },
  setup(props) {
    const profile = ref<any>({
      username: "",
      phone: "",
      email: "",
      group: "",
      message: "",
    });
    const onSubmit = () => {
      console.log(props.Info);
    };
    console.log("success");
    return {
      onSubmit,
      profile,
      ...toRefs(props),
    };
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
