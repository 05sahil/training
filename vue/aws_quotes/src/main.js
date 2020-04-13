import Vue from 'vue'
import App from './App.vue'
import CreateQuote from './CreateQuote.vue'
import ProgBar from './ProgBar.vue'

Vue.component('createQuote', CreateQuote)
Vue.component('progBar', ProgBar)

new Vue({
  el: '#app',
  render: h => h(App)
})
