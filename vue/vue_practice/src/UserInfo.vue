<template>
  <div>
    Name: {{ this.info.name }}
    <br>
    <button @click="reverseName">Reverse name</button>
  </div>
</template>

<script>
  export default{
    props: {
      info: Object,
    },
    methods: {
      reverseName(){
        this.info.name = this.info.name.split('').reverse().join('');
        console.log(this.info.name)
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

