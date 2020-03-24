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
  	attack: function(sa=false) {
  	  var random_val = 0
  	  sa?random_val=10:random_val=5;
  	  this.y_attack = Math.floor(Math.random()*10)+5;
  	  this.m_attack = Math.floor(Math.random()*10)+random_val;
  	  this.you -= this.y_attack;
  	  this.monster -= this.m_attack;
  	  console.log('attack')
  	},
  	heal: function(){
  	var heal_val = 10;
  	this.you += heal_val;
  	this.y_attack = Math.floor(Math.random()*10)+5;
  	this.you -= this.y_attack;
  	console.log('heal')
  	},
  },

})