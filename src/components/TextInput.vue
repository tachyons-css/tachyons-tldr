<template>
  <input class="input-reset bn bg-white pa2 lh-solid"
    :value="value"
    @input="updateValue">
</template>

<script>
import debounce from 'lodash.debounce';

export default {
  name: 'text-input',
  props: {
    value: String,
    focus: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (this.focus) { this.$el.focus(); }
  },
  methods: {
    updateValue: debounce(function textInputUpdateValue(e) {
      this.$emit('change', e.target.value);
    }, 300),
  },
};
</script>
