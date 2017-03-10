<script>
export default {
  name: 'section-menu-item',
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
    <router-link class="pv2 pr2 db gray pointer ttu tracked f6 no-underline outline-0 an-c ease-in-out-cubic"
      :class="{ 'washed-pink': isActive }"
      :to="to">
      <slot />
    </router-link>
  </li>
</template>
