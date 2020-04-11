<template lang="pug">
  #app
    Header
    router-view
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  body, html{
    margin: 0;
    padding: 0;
    background: $spring-wood;
  }

  a {
    text-decoration: none;
  }

  #app {
    font-family: "Avenir Next Condensed Regular", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
  }
</style>
