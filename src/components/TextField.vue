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
    onUpdate: debounce(function textInputUpdateValue(e) {
      this.$emit('change', e.target.value);
    }, 300),
    onBlur(e) { this.$emit('blur', e); },
    onClick(e) { this.$emit('click', e); },
    onFocus(e) { this.$emit('focus', e); },
  },
};
</script>

<template>
  <input class="input-reset pa0 outline-0 bn black-70"
    :value="value"
    @input="onUpdate">
</template>
