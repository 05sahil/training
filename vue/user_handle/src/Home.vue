<template>
  <div>
    <h2>This is the home page</h2>
    <div>
      <router-link to="user/1" tag="li">User 1</router-link>
      <router-link to="user/2" tag="li">User 2</router-link>
      <router-link to="user/3" tag="li">User 3</router-link>
      <li @click="getUser">User 4</li>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getUser(){
      this.$router.push('/user/4')
    }
  }
}
</script>

<style>

</style>