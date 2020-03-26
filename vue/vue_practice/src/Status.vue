<template>
  <div class="comp"> 
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

<style scoped>
  .comp {
    width: 50%;
    margin: 0 auto;
    border: 1px solid black;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
  }

</style>