import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import User from './User.vue'
import Edit from './Edit.vue'

Vue.use(VueRouter)

const routes = [{path:'', component: Home}, 
  {path: '/user/:id', component: User, children: [{path:'edit', component: Edit}] }
  ]
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
