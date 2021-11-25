<template>
  <div>
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model="show" @click="onConfirm" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const show = ref(false);
    const date = ref("");
    const onConfirm = (select: Date) => {
      show.value = false;
      date.value = formatDate(select);
    };
    const formatDate = (date: Date) => {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    };
    return {
      onConfirm,
      formatDate,
      show,
      date,
    };
  },
});
</script>
<style lang="scss">
.calendar {
  margin: 0 auto;
  width: 60%;
}
</style>
