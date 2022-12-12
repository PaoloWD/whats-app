<template>
  <div class="input-container p-1">
    <form action="" @submit.prevent="searchClick">
      <input
        type="text"
        name="filter"
        class="w-100 border-0 small"
        placeholder="Cerca o inizia una nuova chat"
        v-model="store.filterSx"
      />
    </form>
    <div v-for="filter in filteredList">
      {{ filter }}
    </div>
  </div>
</template>
<script>
import { store } from "../store";
export default {
  name: "FilterColSx",
  data() {
    return {
      store,
      filter: "",
    };
  },
  methods: {
    searchClick() {
      this.$emit("search", this.store.activeFilters);
    },
  },
  computed: {
    filteredList() {
      const filter = [];
      this.store.randomUsersList.forEach((user) => {
        if (!filter.includes(user.name)) {
          filter.push(user.filter);
        }
      });
      return filter;
    },
  },
};
</script>
<style scope lang="scss">
.input-container {
  background-color: #fafafa;
}
</style>
