<template>
  <label :class="{ clip: hide }"
    :for="htmlFor">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'field-label',
  props: {
    hide: Boolean,
    htmlFor: String,
  },
};
</script>
