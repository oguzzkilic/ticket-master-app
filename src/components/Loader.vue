<template>
  <i class="fas circle-notch loader test-search-loader" />
</template>

<style scoped>
.loader {
  font-size: 40px;
  margin: 0 auto;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
