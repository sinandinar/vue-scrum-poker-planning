<template lang="pug">
  #app
    Icons
    Header
    router-view
</template>

<script>
import Icons from '@/components/global/Icons'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Icons,
    Header
  }
}
</script>

<style lang="scss">
  #app {
    font-family: "Avenir Next Condensed Regular", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
  }

  body, html {
    margin: 0;
    padding: 0;
    background: $spring-wood;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }

  .Button {
    cursor: pointer;
    width: 220px;
    height: 50px;
    border-radius: $border-radius;
    background-color: $flamingo;
    color: $white;
    @include theme-font-setting('md', 'regular');
  }
</style>
