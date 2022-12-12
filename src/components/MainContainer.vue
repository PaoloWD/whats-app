<template>
  <div class="main-container d-flex">
    <ColSx></ColSx>
    <ColDx></ColDx>
  </div>
</template>
<script>
import ColDx from "../components/ColDx.vue";
import ColSx from "../components/ColSx.vue";
export default {
  components: { ColSx, ColDx },
};
</script>
<style lang="scss">
.col-sx {
  width: 300px;
  background-color: white;
  height: 100%;
}
.main-container {
  height: 100vh;
  padding: 3rem 7rem;
}
</style>
