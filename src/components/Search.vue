<script>
export default {
  name: "Search",
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    handleSearch() {
      this.$emit("SearchRequested", this.keyword);
    }
  }
};
</script>

<template>
  <div id="search" class="field is-grouped">
    <div class="control is-expanded">
      <input
        type="text"
        class="input is-large test-search-input"
        placeholder="find a event.."
        @keypress.enter="handleSearch"
        v-model="keyword"
      />
    </div>

    <div class="control">
      <button
        class="button is-primary is-large test-search-button"
        @click="handleSearch"
      >
        Search
      </button>
    </div>
  </div>
</template>
