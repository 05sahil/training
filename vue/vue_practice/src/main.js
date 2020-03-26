import Vue from 'vue'
import App from './App.vue'
import status_obj from './Home.vue'

// Vue.component('status_comp',status_obj)

new Vue({
  el: '#app',
  render: h => h(status_obj)
})

// new Vue({
//   el: '#app2'
// })