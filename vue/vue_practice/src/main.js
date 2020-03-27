import Vue from 'vue'
import App from './App.vue'
import status_obj from './Home.vue'
import userInfo from './UserInfo.vue'

 Vue.component('statusComp',status_obj)
 Vue.component('userInfo',userInfo)

new Vue({
  el: '#app',
  render: h => h(App)
})
