<template>
  <div>
    <status-comp></status-comp>
    <h2>{{ str }}</h2>
    <user-info :info='info' @sendQuote="str=$event"></user-info>
    <edit-user-info :info='info'></edit-user-info>
    
  </div>
</template>

<script>
  export default{
    data: function() {
      return {
        info: {
          name: 'Maria'
        },
        str: '',
      }
    },
  } 


</script>

<style>
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
</style>
