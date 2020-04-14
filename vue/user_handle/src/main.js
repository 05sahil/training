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
  {  path: '/user/:id', component: User, 
     children: [
       {path:'edit', 
       components: {default: Edit, 'footer': Footer},
       name: 'edit'
       }
     ],
     beforeEnter: (to, from, next) => {
       console.log('Entering user')	
       next('')
     },
  },
  {path:'something', redirect:''},
  {path:'*', redirect:''},
]
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition)
  {	
  	if (savedPosition)
  	{
  	  return savedPosition
  	}
  	else if (to.hash)
  	{
  	  return {selector: to.hash}
  	}
  	else
  	{
  	  return {x:0, y:0}
  	}
  }
})

router.beforeEach((to, from, next) => {
  console.log('component loaded')
  next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
