import Vue from "vue";
import VueRouter from "vue-router";
import Button from "../views/Button/index.vue";
import ButtonShow from "../views/Button/Show.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/button",
    components: {
      default: Button,
      show: ButtonShow
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
