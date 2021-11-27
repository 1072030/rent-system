<template>
  <van-calendar
    class="calendar"
    v-model:show="show"
    :show-title="false"
    @confirm="onselect"
    :round="false"
    first-day-of-week="1"
    :poppable="false"
    :show-confirm="false"
    :style="{ height: '500px' }"
    :max-date="maxDate"
  />
  <van-dialog
    v-model:show="dialog"
    :title="date"
    :show-confirm-button="false"
    :show-cancel-button="true"
    cancel-button-text="關閉"
  >
    <div>
      <ul v-for="(data, index) in session" :key="index" class="table">
        <li>{{ data.text }}</li>
        <van-button type="primary">立即預約</van-button>
      </ul>
    </div>
  </van-dialog>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const maxDate = ref(new Date());
    maxDate.value.setDate(maxDate.value.getDate() + 14);
    const session = ref([
      {
        value: 1,
        text: "場次 : 13:00-13:50",
        isReserve: false,
      },
      {
        value: 2,
        text: "場次 : 14:00-14:50",
        isReserve: false,
      },
      {
        value: 3,
        text: "場次 : 15:00-15:50",
        isReserve: false,
      },
      {
        value: 4,
        text: "場次 : 16:00-16:50",
        isReserve: false,
      },
      {
        value: 5,
        text: "場次 : 17:00-17:50",
        isReserve: false,
      },
    ]);
    const date = ref("");
    const show = ref(false);
    const dialog = ref(false);

    const onselect = (value: any) => {
      show.value = false;
      dialog.value = true;
      date.value = formatDate(value);
      console.log(date.value);
    };
    const formatDate = (date: any) => {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    };

    return {
      dialog,
      maxDate,
      session,
      date,
      show,
      onselect,
    };
  },
});
</script>
<style lang="scss">
.calendar {
  margin: 0 auto;
  width: 60%;
}
.table {
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  li {
    font-size: 18px;
    flex: 3 0 0;
    align-items: center;
  }
  button {
    flex: 1 0 0;
    margin-right: 5%;
    border-radius: 10px;
  }
}
</style>
