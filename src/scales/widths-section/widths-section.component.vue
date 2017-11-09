<script>
import WidthScaleGrid from './width-scale-grid.component';

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
    <src-link to="widths">
      <h3 class="f5 mv0 black-70">Width Scale</h3>
    </src-link>
    <width-scale-grid class="mb5"
      :scale="widths.scale" />

    <src-link to="widths">
      <h3 class="f5 mv0 black-70">Width – Thirds</h3>
    </src-link>
    <width-scale-grid class="mb5"
      :scale="widths.third" />

    <src-link to="widths">
      <h3 class="f5 mv0 black-70">Width – Percentage</h3>
    </src-link>
    <width-scale-grid class="mb5"
      :scale="widths.percent" />

    <src-link to="max-widths">
      <h3 class="f5 mv0 black-70">Max Widths</h3>
    </src-link>
    <width-scale-grid
      :scale="maxWidths" />
  </section>
</template>
