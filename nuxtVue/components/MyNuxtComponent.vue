<template>
  <div>
    <h1>Welcome to my Nuxt app!</h1>
    <img class="logo" src="./nuxtnew.png" height="150">
    <my-component />
  </div>
</template>

<script>
import MyComponent from '../../VueApp/src/components/MyComponent'

export default {
  components: {
    'my-component': MyComponent
  }
}
</script>
