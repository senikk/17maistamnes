import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Stamnes from "./Stamnes.vue";
import vuetify from "./plugins/vuetify";
import NotFound from "./NotFound.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Stamnes },
  { path: '*', component: NotFound }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');