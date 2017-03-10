<script>
export default {
  name: 'section-menu',
  props: {
    activeIndex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    indicatorTransform() {
      return `translate3d(0, ${this.activeIndex * 32}px, 0)`; // 2rem
    },
  },
};
</script>

<template>
  <aside>
    <div class="flex sticky top-1">
      <ul class="list tr pl0 mt0">
        <slot />
      </ul>
      <div>
        <div class="br b--washed-pink bw1 h2 swift-out an-t"
          :style="{ transform: indicatorTransform }"/>
      </div>
    </div>
  </aside>
</template>
