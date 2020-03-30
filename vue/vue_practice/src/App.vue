<template>
  <div>
    <status-comp></status-comp>
    <user-info :info='info'></user-info>
    <edit-user-info :info='info'></edit-user-info>
    
  </div>
</template>

<script>
  export default{
    data: function() {
      return {
        info: {
          name: 'Maria'
        }
      }
    }
  } 


</script>

<style>
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
</style>
