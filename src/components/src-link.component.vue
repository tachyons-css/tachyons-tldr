<script>
export default {
  name: 'src-link',
  props: {
    to: String,
  },
  computed: {
    srcHref() {
      return `https://github.com/tachyons-css/tachyons/blob/master/src/_${this
        .to}.css`;
    },
  },
};
</script>

<template>
  <a :href="srcHref" class="mb3 link flex items-center hide-child">
    <slot />
    <svg
      viewBox="0 0 24 24"
      style="width:1em; height: 1em;"
      class="dib v-btm f5 light-purple ml1 child">
      <path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </svg>
  </a>
</template>
