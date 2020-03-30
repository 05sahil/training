<template>
  <div>
    Name: {{ this.name }}
    <br>
    <button @click="reverseName">Reverse name</button>
  </div>
</template>

<script>
  export default{
    props: ['name'],
    methods: {
      reverseName(){
        this.name = this.name.split('').reverse().join('');
        console.log(this.name)
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

