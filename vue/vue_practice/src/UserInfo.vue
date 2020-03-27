<template>
  <div>
    Name: {{ this.name }}
  </div>
</template>

<script>
  export default{
    data: function(){
      return {
        name: 'John Doe'
      }
    }
  } 
</script>

<style scoped>
  div {
    padding: 10px; 
    width: 50%;
    border: 2px solid dodgerblue;
    margin: 15px auto; 
    }
</style>

