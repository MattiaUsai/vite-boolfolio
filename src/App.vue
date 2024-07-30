<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";
import { store } from "./store";
export default {
  data() {
    return {
      store,
      projectList: [],
    };
  },
  created() {
    console.log("chiamata api");

    axios.get(store.APIurl).then((response) => {
      console.log(response);
      this.store.ApiCall = response.data;
      this.store.projectList = response.data.results;
      this.projectList = store.projectList;
    });
  },
};
</script>

<template>
  list
  <ul>
    <li></li>
  </ul>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
