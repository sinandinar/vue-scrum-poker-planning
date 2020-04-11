<template lang="pug">
  .not-found
    .not-found__title Time travel is not possible at this time!
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss">
  .not-found {
    text-align: center;
    margin-top: 50px;

    &__title {
      color: $black;
      @include theme-font-setting('xl', 'semibold');
    }
  }
</style>
