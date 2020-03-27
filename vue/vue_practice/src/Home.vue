<template>
  <div class="main">
    <h3>Server Status</h3>
    <server_status_comp v-for="server in 2"></server_status_comp>
  </div>
</template>

<script>
  import comp from './Status.vue' 
  export default{
    components: {
      server_status_comp: comp
    }
  } 
</script>

<style scoped>
 .main {
   border: 2px solid black;
   padding: 20px;
 }
</style>