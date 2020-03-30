<template>
  <div>
  	<h3>User Edit</h3>
  	<button @click="change_name">change name</button> 
  	<input v-show="val" v-model="info.name" type="text">
  </div>
</template>

<script>
  export default{
  	props: {
  	  info: Object,
  	},
    data: function(){
      return {
        val: false,
        // name: this.info.name
      }
    },
    methods: {
      change_name(){
        this.val = true
      }
    }
  } 
</script>

<style >
	
</style>