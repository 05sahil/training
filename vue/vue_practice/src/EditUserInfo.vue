<template>
  <div>
  	<button @click="change_name">change name</button> <input v-show="val" v-model="name" type="text">
      {{ name }}
  </div>
</template>

<script>
  export default{
  	props: {
  	  name: String,
  	},
    data: function(){
      return {
        val: false
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