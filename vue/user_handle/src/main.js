import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import User from './User.vue'
import Edit from './Edit.vue'
import Footer from './Footer.vue'
import EnterUser from './EnterUser.vue'

Vue.use(VueRouter)

const routes = [
  {path:'', components: {default: Home, 'footer': Footer}},
  {path:'enter', component: EnterUser, name: 'enter'}, 
  {  path: '/user/:id',
  	 name: 'user', 
  	 component: User, 
     children: [
       {path:'edit', 
       components: {default: Edit, 'footer': Footer},
       name: 'edit'
       }
     ],
     beforeEnter: (to, from, next) => {
       console.log('Entering user', to.params.id)	
       next()
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
  	if (to.hash)
  	{
  	  return {selector: to.hash}
  	}
  	return {x:0, y:0}
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
