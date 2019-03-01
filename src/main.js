import Vue from "vue";
import Vuex from "vuex";
import Router from "vue-router";
import App from "./App.vue";
import routerOptions from "./routers/router";
import storeOptions from "./stores/store";
import "./registerServiceWorker";

require("./assets/main.scss");

Vue.config.productionTip = false;

Vue.use(Router);
const router = new Router(routerOptions);

Vue.use(Vuex);
const store = new Vuex.Store(storeOptions);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
