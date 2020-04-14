<template>
  <div>
    <h2>This is the user page</h2>
    <h4>User id: {{ $route.params.id }}</h4>
    <hr>
    <router-link :to="link" tag="div">Edit user</router-link>
    <router-view></router-view>
    <router-view name='footer'></router-view>
  </div>
</template>

<script>
export default {
  data () {
  	return {
  	  name: 'John Doe',
  	  age: '25',
  	  link: {
  	  	name:'edit', 
  	  	params: {id: this.$route.params.id}, 
  	  	query: {name: 'John  Doe', age: '25'},
  	  	hash: '#data'
  	  } 
  	}
  }
}
</script>

<style>

</style>
