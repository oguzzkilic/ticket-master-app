<script>
import Search from "@/components/Search.vue";
import List from "@/components/List.vue";
import Loader from "@/components/Loader";
import Pagination from "@/components/Pagination";

export default {
  name: "home",
  components: {
    Search,
    List,
    Loader,
    Pagination
  },
  data() {
    return {
      isLoading: false,
      keyword: ""
    };
  },
  computed: {
    events() {
      return this.$store.state.events;
    },
    pagination() {
      return this.$store.state.pagination;
    }
  },
  methods: {
    handleSearch(keyword) {
      this.isLoading = true;

      this.keyword = keyword;

      this.$store.dispatch("resetSearchResults");
      this.$store.dispatch("fetchByKeyword", keyword).then(() => {
        this.isLoading = false;
      });
    },
    handlePageClick(number) {
      this.isLoading = true;

      const k = this.$store.state.keyword;
      const payload = { number, k };

      this.$store.dispatch("fetchByPage", payload).then(() => {
        this.isLoading = false;
      });
    }
  }
};
</script>

<template>
  <div id="home" class="m-30">
    <Search v-on:SearchRequested="handleSearch" />
    <Loader v-if="isLoading" />
    <List :events="events" />
    <Pagination :pagination="pagination" v-on:PageClicked="handlePageClick" />
  </div>
</template>

<style scoped>
.m-30 {
  margin: 30px;
}
</style>
