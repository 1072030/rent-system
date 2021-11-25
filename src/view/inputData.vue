<template>
  <van-calendar
    class="calendar"
    v-model:show="show"
    title="日期"
    @confirm="onConfirm"
    :round="false"
    first-day-of-week="1"
    :poppable="false"
    :show-confirm="false"
    :style="{ height: '500px' }"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const date = ref("");
    const show = ref(false);

    const formatDate = (date: any) =>
      `${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = (value: any) => {
      show.value = false;
      date.value = formatDate(value);
    };

    return {
      date,
      show,
      onConfirm,
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
