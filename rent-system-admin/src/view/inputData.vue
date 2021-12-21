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
        <van-button
          type="primary"
          :disabled="data.isReserve"
          @click="sendData(index)"
          to="reserve"
          >立即預約</van-button
        >
      </ul>
      <!--  to="reserve"x -->
    </div>
  </van-dialog>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    Info: Object,
  },
  emits: ["setDate"],
  setup(props, context) {
    const maxDate = ref(new Date());
    maxDate.value.setDate(maxDate.value.getDate() + 14);
    // onMounted(() => {
    //   //事先請求api 確定預約日期
    //   let DataInfo = [];
    //   const i = new Date();
    //   let date = i.getDate();
    //   console.log(i.getDate());
    //   for (let j = 0; j < 14; j++) {
    //     for (let k = 0; k < 5; k++) {
    //       DataInfo.push({
    //         date:date,
    //       });
    //     }
    //   }
    // });
    const session = ref([
      {
        value: 1,
        text: "場次 : 13:00-13:50",
        isReserve: true,
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
    const sendData = (index: any) => {
      // console.log(date.value);
      // console.log(session.value[index]);
      let content = Object.assign({
        date: date.value,
        session: session.value[index].value,
        title: session.value[index].text,
        isReserve: session.value[index].isReserve,
      });
      context.emit("setDate", content);
    };
    const onselect = (value: Date) => {
      show.value = false;
      dialog.value = true;
      console.log(value);
      date.value = formatDate(value);
      console.log(date.value);

      // fetch("", {
      //   method: "GET",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      // })
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((result) => {
      //     console.log(result);
      //   });
    };
    const formatDate = (date: Date) => {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    };

    return {
      dialog,
      maxDate,
      session,
      date,
      show,
      onselect,
      sendData,
    };
  },
});
</script>
<style lang="scss">
.calendar {
  margin: 0 auto;
  width: 60%;
  background-color: azure;
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
