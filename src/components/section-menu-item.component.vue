<script>
export default {
  name: 'section-menu-item',
  props: {
    to: String,
  },
};
</script>

<template>
  <li>
    <router-link class="pv2 pr2 db mid-gray pointer ttu tracked f6 no-underline outline-0 an-c ease-in-out-cubic"
      :to="to">
      <slot />
    </router-link>
  </li>
</template>
