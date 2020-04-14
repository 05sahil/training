<template>
  <div>
    <router-link :to="{name:'user', params: {id: $route.query.id}}" tag="div" class="link">Click to enter User</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
  	console.log('called')
  	next()
  }
}
</script>

<style scoped>
  .link {
    text-align: center;
    background: dodgerblue;
    color: white;
    padding: 10px;
    margin: 20px auto;
    width: 40%
  }
</style>