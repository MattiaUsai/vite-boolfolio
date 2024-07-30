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
  <div class="container">
    <div class="row">
      <div class="card-project" v-for="project in store.projectList">
        <h3>{{ project.nome }}</h3>
        <h4>{{ project.repository }}</h4>
        <p>{{ project.descrizione }}</p>
        <h2>{{ project.prezzo }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 80vw;
  .row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .card-project {
      background-color: lightgray;
      width: calc(25% - 20px);
      height: 40vh;
      margin: 10px;
    }
  }
}
</style>
