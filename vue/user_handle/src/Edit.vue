<template>
  <div>
  	<h3>{{ $route.query.name }}</h3>
  	<h3>Age: {{ $route.query.age }}</h3>
    <h3>This is the edit page of user {{ $route.params.id }}</h3>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>