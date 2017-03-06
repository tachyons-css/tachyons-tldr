<script>
export default {
  name: 'sidebar-link',
  props: {
    to: String,
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <li>
    <router-link class="pv2 pr2 db gray pointer ttu tracked f6 link no-underline"
      :class="{ 'washed-pink': isActive }"
      :to="to">
      <slot />
    </router-link>
  </li>
</template>
