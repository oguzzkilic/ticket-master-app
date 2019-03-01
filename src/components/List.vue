<script>
import getCloselySizedImage from "../helpers";

export default {
  name: "List",
  props: ["events"],
  methods: {
    thumbnailImage(images) {
      let thumb = null;
      if (images && images.length) {
        thumb = getCloselySizedImage(images, 70, 100);
      }
      return thumb.url;
    }
  }
};
</script>

<template>
  <div>
    <table id="list" class="table is-hoverable is-fullwidth is-striped">
      <tbody>
        <tr
          v-for="event in events"
          :key="event.id"
          class="is-dark table-row test-event-list-item"
        >
          <td>
            <img
              :src="thumbnailImage(event.images)"
              :alt="event.name"
              class="test-event-list-item-image"
            /><br />
            <b>Date: {{ event.dates.start.localDate }}</b>
          </td>
          <td>
            {{ event.name }}<br />
            <span class="tag is-light">
              <i>
                {{ event._embedded.venues[0].city.name }} /
                {{ event._embedded.venues[0].country.name }}
              </i>
            </span>
          </td>
          <td>
            <router-link
              :to="`/detail/${event.id}`"
              class="button is-black is-large test-event-detail"
              >Details</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table {
  margin-bottom: 30px;
}
.table-row td {
  vertical-align: middle;
}
</style>
