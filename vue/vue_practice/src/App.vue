<template>
  <div>
    <component :is="comp">      
    </component>
    <hr>
    <button @click="compChange">Change Component</button>
    <status-comp></status-comp>
    <h2>{{ str }}</h2>
    <user-info :info='info' @sendQuote="str=$event"></user-info>
    <edit-user-info :info='info'>
      <h4 slot='heading'>Edit user info here</h4>
      <p slot="para">user can be edited </p>
    </edit-user-info>
    
  </div>
</template>

<script>
  export default{
    data: function() {
      return {
        info: {
          name: 'Maria',
        },
        str: '',
        comp: 'vQuote'
      }
    },
    methods: {
      compChange () {
        this.comp == 'vQuote'? this.comp = "vAuthor" : this.comp = "vQuote"
      }
    }
  } 


</script>

<style scoped>
  h4 {color: blue}
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
</style>
