import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

Vue.use(PiniaVuePlugin)
import VueTimeline from "@growthbunker/vuetimeline";

Vue.use(VueTimeline, {
  theme: 'dark'
});

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
