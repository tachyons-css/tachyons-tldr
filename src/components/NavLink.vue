<script>
export default {
  name: 'nav-link',
  props: {
    to: String,
  },
};
</script>

<template>
  <router-link class="link dim gray f6 dib mr3 w3"
    :to="to">
    <slot></slot>
  </router-link>
</template>
