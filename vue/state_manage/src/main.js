import Vue from 'vue'
import App from './App.vue'
import Buttons from './Buttons.vue'
import {store} from './store/store'

Vue.component('vButton', Buttons)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
