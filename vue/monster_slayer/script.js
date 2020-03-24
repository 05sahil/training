console.log('monster')

new Vue({
  el: '#app',
  data: {
  	con_value: true,
  	you: 100,
  	monster: 100,
  	y_attack: 0,
  	m_attack: 0
  },
  methods: {
  	attack: function() {
  	  this.y_attack = Math.floor(Math.random()*10)+5;
  	  this.m_attack = Math.floor(Math.random()*10)+5;
  	  this.you -= this.y_attack;
  	  this.monster -= this.m_attack;
  	}
  }
})