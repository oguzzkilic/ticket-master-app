<script>
import getCloselySizedImage from "../helpers";

export default {
  name: "Detail",
  computed: {
    eventDetail() {
      return this.$store.state.eventDetail;
    }
  },
  mounted() {
    const payload = this.$route.params.id;
    this.$store.dispatch("getEventDetail", payload);
  },
  methods: {
    getImage(images) {
      let img = null;
      if (images && images.length) {
        img = getCloselySizedImage(images, 300, 200);
      }
      return img.url;
    }
  }
};
</script>

<template>
  <div class="detail" v-if="eventDetail[0]">
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-four-fifths">
              <h1 class="title test-event-detail-title">
                {{ eventDetail[0].name }}
              </h1>
              <h2 class="subtitle test-event-detail-subtitle">
                {{ eventDetail[0].dates.start.localDate }}
              </h2>
              <div class="test-event-detail-location">
                <h4 class="title">Location</h4>
                <span class="tag is-black is-medium">{{
                  eventDetail[0]._embedded.venues[0].city.name
                }}</span
                ><br />
                <span class="tag is-warning">{{
                  eventDetail[0]._embedded.venues[0].country.name
                }}</span>
              </div>
            </div>

            <div class="column">
              <figure class="image is-square test-event-detail-image">
                <img
                  :src="getImage(eventDetail[0].images)"
                  :alt="eventDetail[0].name"
                />
              </figure>
              <br />
              <a
                class="button is-link is-fullwidth test-event-detail-buy-ticket"
                :href="eventDetail[0].url"
                target="_blank"
                >Buy Ticket</a
              >
            </div>
          </div>
          <p>
            <router-link to="/" class="is-light is-medium test-back-search-page"
              >Back to Search</router-link
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
