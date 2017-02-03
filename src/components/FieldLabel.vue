<template>
  <label :class="{ clip: hide }">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'field-label',
  props: {
    hide: Boolean,
  },
};
</script>
