<script>
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Footer
  }
};
</script>

<template>
  <div id="app" class="container is-fluid">
    <router-view />
    <Footer />
  </div>
</template>
