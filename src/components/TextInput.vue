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
    if (this.focus) { setTimeout(() => this.$el.focus(), 600); }
  },
  methods: {
    updateValue: debounce(function textInputUpdateValue(e) {
      this.$emit('change', e.target.value);
    }, 300),
  },
};
</script>

<template>
  <input class="input-reset pa2 outline-0 bn purple"
    :value="value"
    @input="updateValue">
</template>
