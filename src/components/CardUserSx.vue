<template>
  <div>
    <div class="d-flex py-2 px-3 align-items-center gap-3">
      <div>
        <img :src="singleUser.picture.medium" alt="" />
      </div>
      <div>{{ singleUser.name.first }}</div>
    </div>
  </div>
</template>
<script>
import { store } from "../store";
export default {
  name: "CardUserSx",
  props: {
    in: {
      type: Number,
    },
    singleUser: {
      type: Object,
    },
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    testFunction: function () {
      store.index = this.in;

      console.log("selectedUser", this.store.selectedUser);
      console.log("chat", this.store.selectedChat);
      console.log("singleUser: ", this.singleUser);
    },
    //Chiedere se si può fare senza funzione
  },
};
</script>
<style lang="scss">
img {
  border-radius: 50%;
}
</style>
