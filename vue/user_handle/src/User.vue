<template>
  <div>
    <h2>This is the user page</h2>
    <h4>User id: {{ $route.params.id }}</h4>
    <hr>
    <router-link :to="'/user/' + $route.params.id + '/edit'" tag="div">Edit user</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>
