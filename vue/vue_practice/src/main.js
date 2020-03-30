import Vue from 'vue'
import App from './App.vue'
import status_obj from './Home.vue'
import userInfo from './UserInfo.vue'
import editUserInfo from './EditUserInfo.vue'

export const eventBus = new Vue()

Vue.component('statusComp',status_obj)
Vue.component('userInfo',userInfo)
Vue.component('editUserInfo',editUserInfo)

new Vue({
  el: '#app',
  render: h => h(App)
})
