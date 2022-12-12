<script>
import BgContainer from "../src/components/BgContainer.vue";
import MainContainer from "../src/components/MainContainer.vue";
import { store, fetchMessages, fetchUseres } from "../src/store";
export default {
  components: { BgContainer, MainContainer },
  data() {
    return {
      store,
    };
  },
  methods: {},
  created() {
    fetchMessages();
    fetchUseres(10);
  },
};
</script>

<template>
  <div>
    <BgContainer></BgContainer>
    <MainContainer></MainContainer>
  </div>
</template>

<style lang="scss"></style>
