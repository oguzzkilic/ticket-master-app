<script>
export default {
  name: "Pagination",
  props: ["pagination"],
  computed: {
    pages() {
      let pages = [];
      let from = this.pagination.number - Math.floor(10 / 2);
      if (from < 0) {
        from = 0;
      }
      let to = from + 10 - 1;
      if (to > this.pagination.totalPages - 1) {
        to = this.pagination.totalPages - 1;
      }
      while (from <= to) {
        pages.push(from);
        from++;
      }
      return pages;
    }
  },
  methods: {
    isCurrentPage(page) {
      return this.pagination.number === page;
    }
  }
};
</script>

<template>
  <nav
    class="pagination is-centered"
    role="navigation"
    aria-label="pagination"
    v-if="pagination.length !== 0"
  >
    <button
      class="pagination-previous test-pagination-previous"
      @click="$emit('PageClicked', pagination.number - 1)"
      :disabled="pagination.number <= 0"
    >
      Previous
    </button>
    <button
      class="pagination-next test-pagination-next"
      @click="$emit('PageClicked', pagination.number + 1)"
      :disabled="pagination.number >= pagination.totalPages - 1"
    >
      Next page
    </button>

    <ul class="pagination-list">
      <li v-for="page in pages" :key="page">
        <button
          class="pagination-link test-pagination-link"
          :class="isCurrentPage(page) ? 'is-current' : ''"
          @click="$emit('PageClicked', page)"
        >
          {{ page + 1 }}
        </button>
      </li>
    </ul>
  </nav>
</template>
