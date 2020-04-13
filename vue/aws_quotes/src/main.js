import Vue from 'vue'
import App from './App.vue'
import CreateQuote from './CreateQuote.vue'
import ProgBar from './ProgBar.vue'
import Quote from './Quote.vue'
import QuoteGrid from './QuoteGrid.vue'

Vue.component('createQuote', CreateQuote)
Vue.component('progBar', ProgBar)
Vue.component('vQuote', Quote)
Vue.component('quoteGrid', QuoteGrid)

new Vue({
  el: '#app',
  render: h => h(App)
})
