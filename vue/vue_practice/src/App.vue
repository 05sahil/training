<template>
  <div>
    <status-comp></status-comp>
    <user-info :name='name'></user-info>
    <div>
      <button @click="change_name">change name</button> <input v-show="val" v-model="name" type="text">
      {{ name }}
    </div>
    
  </div>
</template>

<script>
  export default{
    data: function(){
      return {
        name: 'John Doe',
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

<style>
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
</style>
