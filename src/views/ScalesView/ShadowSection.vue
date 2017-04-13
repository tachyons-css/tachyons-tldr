<script>
import BoxScaleGrid from '../../components/BoxScaleGrid';

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
