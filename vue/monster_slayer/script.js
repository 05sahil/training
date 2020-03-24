console.log('monster')

var com = {
  template: '<h1>I ama a template</h1>'	
}

new Vue({
  el: '#app',
  data: {
  	con_value: true,
  	you: 100,
  	monster: 100,
  	y_attack: 0,
  	m_attack: 0,
  	battles: []
  },
  components: {
  	mycomp: com,
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
  	  var battle = {
  	  	you: 'Player hits monster for '+ this.m_attack,
  	    monster: 'Monster hits player for ' + this.y_attack
  	  }
  	  this.battles.push(battle)
  	  // var html = "<p>Player hits monster for {{ this.m_attack }}</p><p>Monster hits player for {{ this.y_attack }}</p>"
  	  // document.querySelector('#attack_display').insertAdjacentHTML('beforeend','<mycomp></mycomp>')
  	},
  	heal: function(){
  	var heal_val = 10;
  	this.you += heal_val;
  	this.y_attack = Math.floor(Math.random()*10)+5;
  	this.you -= this.y_attack;
  	console.log('heal')
  	var heal = {
  	  you: 'Player Heals for ' + heal_val,
  	  monster: 'Monster hits player for ' + this.y_attack
  	}
  	this.battles.push(heal)
  	},

  },

})

