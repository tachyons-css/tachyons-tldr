<script>
export default {
  name: 'terminal',
  props: {
    title: String,
  },
};
</script>

<template>
  <div class="pa3 br2 ba b--black-20 bg-white shadow-hover">
    <slot></slot>
  </div>
</template>
