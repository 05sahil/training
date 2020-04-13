<template>
  <div id="">
  	<h3>Create quotes</h3>
  	<textarea name="message" rows="10" cols="50" v-model:value="value">
    </textarea>
    <div>
      <button @click="createquote">Create quote</button>	
    </div>
    
  </div>
</template>

<script>
export default {

  data () {
  	return {
  	  value: ''
  	}
  },

  methods: {
  	createquote () {

  	}
  }
}
</script>

<style>

</style>