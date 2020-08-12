import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel'
import VueScrollReveal from 'vue-scroll-reveal';
import { MdCard } from 'vue-material/dist/components';

Vue.use(VueCarousel);
Vue.use(MdCard);
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '100px',
  mobile: false
})
new Vue({
  el: '#app',
  render: h => h(App)
})
