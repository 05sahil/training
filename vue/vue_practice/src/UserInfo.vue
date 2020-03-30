<template>
  <div>
    <h3>User Info:</h3>
    Name: {{ this.info.name}}
    {{ this.sendQuote() }} 
    <br>
    <button @click="reverseName">Reverse name</button>
  </div>
</template>

<script>
  export default{
    props: {
      info: Object,
    },
    data: function(){
      return{
        str: 'Have a nice day!'
      }
    },
    methods: {
      reverseName(){
        this.info.name = this.info.name.split('').reverse().join('');
      },
      sendQuote(){
        this.$emit('sendQuote',this.str);
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

