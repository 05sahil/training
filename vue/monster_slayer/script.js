console.log('monster')

new Vue({
  el: '#app',
  data: {
  	con_value: true,
  	you: 100,
  	monster: 100,
  	y_attack: 0,
  	m_attack: 0,
  	battles: [],
  },
  watch: {
  	you: function(){
  	  if(this.you<=0)
  	  {
  	  	alert('You Loose!!'+ '\n' + this.battles[this.battles.length-1].you + '\n' + this.battles[this.battles.length-1].monster)
  	  	this.giveup()
  	  } 
  	  if(this.monster<=0)
  	  {
  	  	alert('You Win!!' + '\n' + this.battles[this.battles.length-1].you + '\n' + this.battles[this.battles.length-1].monster)
  	  	this.giveup()
  	  }  
  	}
  },
  methods: {

  	attack: function(sa=false) {
  	  this.img_val = true
  	  var random_val = 0
  	  //condition for special attack
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
  	},

  	heal: function(){
  	  if(this.you<=90)
  	  {
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
  	  }
  	},

  	giveup: function(){
  	  this.con_value = true;
  	  this.you = 100;
  	  this.monster = 100;
  	  this.battles = [];
  	  this.player_width = 100;
  	  this.monster_width = 100;
  	},

  },

})

