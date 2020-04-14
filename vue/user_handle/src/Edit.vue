<template>
  <div>
  	<h3>{{ $route.query.name }}</h3>
  	<h3>Age: {{ $route.query.age }}</h3>
    <h3>This is the edit page of user {{ $route.params.id }}</h3>
    <div>
      <router-link to="/" tag="button">Home</router-link>
    </div>
    <div style="height:700px"></div>
    <p id="data"><h4>some data to be loaded first</h4></p>
    <div>
      <button @click="confirm = true">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
  	return {
  	  confirm: false
  	}
  },

  beforeRouteEnter (to, from, next) {
    console.log('Entered Details')
    next()
  },

  beforeRouteLeave (to, from, next) {
  	if (this.confirm)
  	{
  	  next()
  	}
  	else{
  	  if (confirm('Are you sure?'))
  	  {
  	    next()
  	  }
  	  else {
  	  	console.log('else')
  	  	next(false)
  	  } 

  	}
  }

}
</script>

<style>

</style>