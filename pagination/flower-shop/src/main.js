import Vue from 'vue'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import VueAwesomeSwiper from "vue-awesome-swiper"
import "swiper/css/swiper.css"
import VueAnime from '@/assets/public/scripts/vue-anime'
import * as VueGoogleMaps from 'vue2-google-maps'
import {VueMasonryPlugin} from 'vue-masonry';

sync(store, router)

Vue.use(VueAwesomeSwiper)
Vue.use(VueMasonryPlugin)
Vue.use(VueAnime)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyALfqlWToz4lDszYDttYy0wLjU9kA6US8k',
    // libraries: 'places',
  },
  installComponents: true
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
