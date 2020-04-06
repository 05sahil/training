import Vue from 'vue'
import App from './App.vue'
import status_obj from './Home.vue'
import userInfo from './UserInfo.vue'
import editUserInfo from './EditUserInfo.vue'
import vQuote from './Quote.vue'
import vAuthor from './Author.vue'

export const eventBus = new Vue()

Vue.component('statusComp',status_obj)
Vue.component('userInfo',userInfo)
Vue.component('editUserInfo',editUserInfo)
Vue.component('vAuthor', vAuthor)
Vue.component('vQuote', vQuote)

new Vue({
  el: '#app',
  render: h => h(App)
})
