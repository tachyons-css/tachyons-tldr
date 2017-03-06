<script>
export default {
  name: 'sidebar-link',
  props: {
    to: String,
  },
};
</script>

<template>
  <li>
    <router-link class="pv2 pr2 db gray pointer ttu tracked f6 link no-underline"
      :to="to">
      <slot />
    </router-link>
  </li>
</template>
