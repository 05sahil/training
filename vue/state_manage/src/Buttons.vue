<template>
  <div>
    <div>
      <button @click="$store.state.counter += 1">Increment</button>
    </div>
    <div>
      <button @click="$store.state.counter -= 1">Decrement</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
