<template>
  <van-cell title="选择单个日期" :value="date" @click="show = true" />
  <van-calendar v-model="show" @confirm="onConfirm" />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    console.log("show");
  },
});
</script>
<style lang="scss">
.calendar {
  margin: 0 auto;
  width: 60%;
}
</style>
