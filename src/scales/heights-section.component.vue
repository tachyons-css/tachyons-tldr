<script>
import BoxScaleGrid from './box-scale-grid.component';

export default {
  name: 'heights-section',
  components: {
    BoxScaleGrid,
  },
  props: {
    heights: Object,
  },
};
</script>

<template>
  <section>
    <h3 class="f5 mt0">Height Scale</h3>
    <box-scale-grid class="mb5 items-start"
      :scale="heights.scale" />

    <h3 class="f5">Height – Parent Percentage</h3>
    <box-scale-grid class="mb5 h5"
      :scale="heights.percent" />

    <h3 class="f5">Height – Viewport Percentage</h3>
    <box-scale-grid
      :scale="heights.vh" />
  </section>
</template>
