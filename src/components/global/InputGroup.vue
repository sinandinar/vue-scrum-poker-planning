<template lang="pug">
  .InputGroup(:class="variants")
    .InputGroup-label(v-if="label") {{ label }}
    slot
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    flow: {
      type: String,
      default: 'row'
    }
  },
  computed: {
    variants () {
      return {
        'InputGroup-flow-column': this.flow === 'column'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.InputGroup {
  display: grid;
  grid-column-gap: 25px;
  margin-bottom: 25px;

  &-flow-column {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  &-label{
    color: $black;
    @include theme-font-setting('md', 'regular');
    margin-bottom: 10px;
  }
}
</style>
