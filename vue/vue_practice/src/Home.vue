<template>
  <div>
    <server_status_comp v-for="server in 5"></server_status_comp>
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

<style>

</style>