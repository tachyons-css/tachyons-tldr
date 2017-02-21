<script>
export default {
  name: 'terminal',
  props: {
    title: String,
  },
};
</script>

<template>
  <div class="br2 ba b--black-20 bg-white">
    <slot />
  </div>
</template>
