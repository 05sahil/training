<template>
  <div>
  	<h3>User Edit</h3>
  	<button @click="change_name">change name</button> 
  	<input v-show="val" v-model="info.name" type="text">
    <hr>
    <button @click="editAge">Edit age</button> 
    <input type="text" v-model="age">
  </div>
</template>

<script>
  import {eventBus} from './main'
  export default{
  	props: {
  	  info: Object,
  	},
    data: function(){
      return {
        val: false,
        age: '30',
        val2: false
        // name: this.info.name
      }
    },
    methods: {
      change_name(){
        this.val = true
      },
      editAge(){
        eventBus.$emit('passAge',this.age)
      }
    }
  } 
</script>

<style >
	
</style>