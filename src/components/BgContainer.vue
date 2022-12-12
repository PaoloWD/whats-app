<template>
  <div class="bg-container">
    <div class="bg-top"></div>
    <div class="bg-bottom"></div>
  </div>
</template>
<script>
export default {};
</script>
<style scope lang="scss">
.bg-top {
  background-color: #009988;
  height: 20vh;
}
.bg-bottom {
  background-color: #d1dbdb;
  height: 80vh;
}
.bg-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
}
</style>
