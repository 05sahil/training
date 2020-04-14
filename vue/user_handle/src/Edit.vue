<template>
  <div>
  	<h3>{{ $route.query.name }}</h3>
  	<h3>Age: {{ $route.query.age }}</h3>
    <h3>This is the edit page of user {{ $route.params.id }}</h3>
    <div style="height:700px"></div>
    <p id="data"><h4>some data to be loaded first</h4></p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>