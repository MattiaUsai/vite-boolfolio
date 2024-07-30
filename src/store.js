import { reactive } from "vue";

export const store = reactive({
  APIurl: "http://127.0.0.1:8000/api/userpro",
  ApiCall: {},
  listCharacter: [],
});
