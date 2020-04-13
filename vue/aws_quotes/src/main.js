import Vue from 'vue'
import App from './App.vue'
import CreateQuote from './CreateQuote.vue'

Vue.component('createQuote', CreateQuote)

new Vue({
  el: '#app',
  render: h => h(App)
})
