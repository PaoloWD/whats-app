<template>
  <div>
    <div class="col-sx d-flex flex-column">
      <div class="user-container d-flex justify-content-between px-3">
        <div class="d-flex gap-3">
          <div>Foto</div>
          <div>Sofia</div>
        </div>
        <div class="d-flex gap-3">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
      <div class="blue-banner-container d-flex gap-3 p-3">
        <div>1</div>
        <div>
          <div class="fw-bold">Ricevi notifiche di nuovi messaggi</div>
          <div class="small text-secondary">
            <a href="#">Attiva notifiche desktop</a>
          </div>
        </div>
      </div>
      <FilterColSx @search="onSearch"></FilterColSx>
      <div class="container-users">
        <div v-for="(singleCard, i) in store.randomUsersList" :key="i">
          <CardUserSx :singleUser="singleCard" :in="i"></CardUserSx>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { store, fetchUseres } from "../store";
import CardUserSx from "../components/CardUserSx.vue";
import FilterColSx from "../components/FilterColSx.vue";
export default {
  components: { FilterColSx, CardUserSx },
  name: "ColSx",
  data() {
    return {
      store,
    };
  },

  methods: {
    onSearch(filter) {
      this.store.activeFilters = filter;
      fetchUseres(10);
    },
  },
};
</script>
<style scope lang="scss">
.user-container {
  background-color: #eaeaea;
  min-height: 40px;

  align-items: center;
}

.container-users {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
}

.blue-banner-container {
  width: 100%;
  background-color: #8edafc;
  font-size: 0.7rem;
  a {
    color: #5e94a3;
  }
}
</style>
