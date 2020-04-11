<template lang="pug">
  header.header
    span
      router-link(to="/") Scrum Poker Planning
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  header.header {
    height: 100px;
    background: $flamingo;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: $white;
      @include theme-font-setting('xl', 'medium');
    }
  }
</style>
