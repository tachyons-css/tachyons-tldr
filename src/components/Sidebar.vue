<script>
export default {
  name: 'sidebar',
};
</script>

<template>
  <aside>
    <div class="flex sticky top-1">
      <ul class="list tr pl0 mt0">
        <slot />
      </ul>
      <div>
        <div class="br b--washed-pink bw1 h2"></div>
      </div>
    </div>
  </aside>
</template>
