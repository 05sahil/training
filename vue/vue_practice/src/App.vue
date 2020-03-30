<template>
  <div>
    <status-comp></status-comp>
    <user-info :name='name'></user-info>
    <edit-user-info :name='name'></edit-user-info>
    
  </div>
</template>

<script>
  export default{
    data: function() {
      return {
        name: 'Maria'
      }
    }
  } 
</script>

<style>
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
</style>
