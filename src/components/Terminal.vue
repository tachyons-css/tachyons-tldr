<template>
  <div class="pa3 br2 ba b--black-20 bg-white">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'terminal',
  props: {
    title: String,
  },
};
</script>
