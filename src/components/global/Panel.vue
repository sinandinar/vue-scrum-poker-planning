<template lang="pug">
  .Panel
    .Panel-title {{ panelTitle }}
    .Panel-content
      .Panel-header(v-if="headerTitle") {{ headerTitle }}
      slot
</template>

<script>
export default {
  name: 'Panel',
  props: {
    panelTitle: {
      type: String,
      default: ''
    },
    headerTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.Panel {

  &-title {
    color: $black;
    @include theme-font-setting('md', 'regular');
    margin-bottom: 10px;
  }

  &-header {
    color: $black;
    @include theme-font-setting('base', 'regular');
    margin: -20px 0 40px -20px;
  }

  &-content {
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 40px;
    min-height: 500px;
    height: 100%;
  }
}
</style>
