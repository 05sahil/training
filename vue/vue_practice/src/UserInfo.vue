<template>
  <div>
    <h3>User Info:</h3>
    Name: {{ this.info.name}}
    <hr>
    Age: {{ this.age }}
    {{ this.sendQuote() }} 
    {{ this.getAge() }}
    <br>
    <button @click="reverseName">Reverse name</button>
  </div>
</template>

<script>
  import {eventBus} from './main'

  export default{
    props: {
      info: Object,
    },
    data: function(){
      return{
        str: 'Have a nice day!',
        age: ''
      }
    },
    methods: {
      reverseName(){
        this.info.name = this.info.name.split('').reverse().join('');
      },
      sendQuote(){
        this.$emit('sendQuote',this.str);
      },
      getAge() {
        eventBus.$on('passAge', (a)=>{this.age = a})
        console.log('i am created')
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

