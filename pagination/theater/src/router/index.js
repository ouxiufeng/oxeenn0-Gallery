import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage.vue";
import Menu from "../views/Menu.vue";
import Transition0 from "../views/Transition0.vue";
import Transition1 from "../views/Transition1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu
  },
  {
    path: "/Transition0",
    name: "Transition0",
    component: Transition0
  },
  {
    path: "/Transition1",
    name: "Transition1",
    component: Transition1
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
