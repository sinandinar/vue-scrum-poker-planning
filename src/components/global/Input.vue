<template lang="pug">
  .Input
    .Input-wrapper
      .Input-label {{ label }}
      textarea(
        v-if="inputType === 'textarea'",
        :ref="name",
        :placeHolder="placeHolder",
        v-bind="$attrs",
        v-on="$listeners",
        v-model="val")
      input(
        v-else
        :ref="name",
        :placeHolder="placeHolder",
        v-bind="$attrs",
        v-on="$listeners",
        v-model="val")
</template>

<script>
export default {
  name: 'InputText',
  data () {
    return {
      val: this.value
    }
  },
  props: {
    name: {
      type: String
    },
    inputType: {
      type: String
    },
    placeHolder: {
      type: String
    },
    label: {
      type: String,
      default: ''
    },
    value: {},
    textarea: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    val () {
      this.$emit('input', this.val)
    },
    value () {
      this.val = this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.Input {
  width: 100%;

  &-wrapper {
    display: flex;
    align-items: center;
  }

  &-label {
    color: $black;
    @include theme-font-setting('md', 'regular');
  }

  input, textarea {
    flex: 1;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 16px 14px;
    resize: none;
    background-color: transparent;
    @include theme-font-setting('base', 'medium');
  }

  input {
    margin-left: 20px;
  }
}
</style>
