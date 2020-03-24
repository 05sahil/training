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
  	player_img: './assests/player_img.png',
  	monster_img: './assests/dragon_img.png',
  	img_val: false,
  	player_width: 100,
  	monster_width: 100,
  	player_bar: 'document.getElementById("playerBar")'
  },
  watch: {
  	you: function(){
  	  if(this.you<=0)
  	  {
  	  	alert('You Loose!!')
  	  	console.log('you win')
  	  	this.giveup()
  	  } 
  	  if(this.monster<=0)
  	  {
  	  	alert('You Win!!')
  	  	console.log('you loose')
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
  	  this.move()
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
  	    // this.move()
  	  }
  	},

  	giveup: function(){
  	  var elem1 = document.getElementById("playerBar");
      var elem2 = document.getElementById("monsterBar");
  	  this.con_value = true;
  	  this.you = 100;
  	  this.monster = 100;
  	  this.battles = [];
  	  this.player_width = 100;
  	  this.monster_width = 100;
  	  elem1.style.width = this.player_width + '%';
  	  elem1.innerHTML = this.player_width * 1 + '%';
  	  elem2.style.width = this.monster_width + '%';
      elem2.innerHTML = this.monster_width * 1 + '%';
  	},

  	move: function(){
      var elem1 = document.getElementById("playerBar");
      var elem2 = document.getElementById("monsterBar");
      if (this.player_width > 0) {
      	// this.bar_editor(elem1, this.player_width, this.y_attack)
        this.player_width-=this.y_attack;
        elem1.style.width = this.player_width + '%';
        elem1.innerHTML = this.player_width * 1 + '%';
      }

      if (this.monster_width > 0) {
      	// this.bar_editor(elem2, this.monster_width, this.m_attack)
        this.monster_width-=this.m_attack;
        elem2.style.width = this.monster_width + '%';
        elem2.innerHTML = this.monster_width * 1 + '%';
      }
  
  	},

  	// bar_editor: function(ele,width,attack)
  	// { console.log(width, attack)
  	//   width-=attack;
   //    ele.style.width = width + '%';
   //    ele.innerHTML = width * 1 + '%';
  	// }

  },

})

