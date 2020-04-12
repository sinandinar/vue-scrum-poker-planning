<template lang="pug">
  .Not-found
    .Not-found__title Time travel is not possible at this time!
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss">
  .Not-found {
    text-align: center;
    margin-top: 50px;

    &__title {
      color: $black;
      @include theme-font-setting('xl', 'semibold');
    }
  }
</style>
