import Home from "../views/Home.vue";

export default {
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () =>
        import(/* webpackChunkName: "detail" */ "../views/Detail.vue")
    }
  ]
};
