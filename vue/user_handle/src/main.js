import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import User from './User.vue'
import Edit from './Edit.vue'
import Footer from './Footer.vue'

Vue.use(VueRouter)

const routes = [
  {path:'', components: {default: Home, 'footer': Footer}}, 
  {path: '/user/:id', component: User, 
    children: [{path:'edit', 
      components: {default: Edit, 'footer': Footer}
    }] 
  },
  {path:'something', redirect:''},
  {path:'*', redirect:''},
]
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
