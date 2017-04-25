<script>
import BoxScaleGrid from './box-scale-grid.component';

export default {
  name: 'shadow-section',
  components: {
    BoxScaleGrid,
  },
  props: {
    shadowScale: Object,
  },
};
</script>

<template>
  <section>
    <h3 class="f5 mt0">Shadow Scale</h3>
    <box-scale-grid
      :scale="shadowScale" />
  </section>
</template>
