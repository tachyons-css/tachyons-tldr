<script>
import WidthScaleGrid from '../../components/WidthScaleGrid';

export default {
  name: 'widths-section',
  components: {
    WidthScaleGrid,
  },
  props: {
    widths: Object,
    maxWidths: Object,
  },
};
</script>

<template>
  <section>
    <h3 class="f5 mt0">Width Scale</h3>
    <width-scale-grid class="mb5"
      :scale="widths.scale" />

    <h3 class="f5">Width – Thirds</h3>
    <width-scale-grid class="mb5"
      :scale="widths.third" />

    <h3 class="f5">Width – Percentage</h3>
    <width-scale-grid class="mb5"
      :scale="widths.percent" />

    <h3 class="f5">Max Widths</h3>
    <width-scale-grid
      :scale="maxWidths" />
  </section>
</template>
