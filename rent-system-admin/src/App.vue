<template>
  <router-view @setDate="setDate" v-model:Info="Info" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const Info = ref({});
    const setDate = (value: any) => {
      Info.value = value;
    };
    return {
      Info,
      setDate,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
