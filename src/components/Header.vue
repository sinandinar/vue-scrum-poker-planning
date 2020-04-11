<template lang="pug">
  header.Header
    span
      router-link(to="/") Scrum Poker Planning
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  header.Header {
    height: 100px;
    background: $flamingo;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

    a {
      color: $white;
      @include theme-font-setting('xl', 'medium');
    }
  }
</style>
