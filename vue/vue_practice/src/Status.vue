<template>
  <div> 
    <p>status: {{ status }}</p>
    <hr>
    <button @click="change_status">
      change status
    </button>
  </div> 
</template>

<script>
  export default{
    data: function(){
      return {
        status: 'normal'
      }
    },
    methods: {
      change_status() {
      this.status == 'normal'?this.status = 'critical':this.status = 'normal'; 
      }
    }
  } 
</script>

<style>

</style>