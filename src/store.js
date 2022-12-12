import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  randomMessagesList: [],
  randomUsersList: [],
  inputMessage: "",
  filterSx: "",
  selectedUser: null,
  index: null,
  activeFilters: null,
});

export function fetchMessages() {
  axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((resp) => (store.randomMessagesList = resp.data));
  console.log(store.randomMessagesList);
}

export function fetchUseres(num) {
  axios
    .get(`https://randomuser.me/api/?results=${num}`)
    .then((resp) => (store.randomUsersList = resp.data.results));
  console.log(store.randomUsersList);
}
