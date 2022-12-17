<template>
  <div>
    <div
      @click="(store.selectedUser = singleUser), standardMsg()"
      class="d-flex py-2 px-3 align-items-center gap-3"
    >
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
    standardMsg: function () {
      const standardMsg = {
        msg: this.store.randomMessagesList[this.in].body,
        status: "receipt",
      };
      console.log(standardMsg);
      //this.$set(this.store.selectedUser, standardMsg.name, standardMsg);
      this.store.selectedUser["msg"] = [standardMsg];
      console.log(store.selectedUser.msg[0].msg);
      //console.log("this: ", this);
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
