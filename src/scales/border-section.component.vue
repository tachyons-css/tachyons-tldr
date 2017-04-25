<script>
import BoxScaleGrid from './box-scale-grid.component';

export default {
  name: 'scales-view',
  components: {
    BoxScaleGrid,
  },
  props: {
    borderRadius: Object,
    borderWidths: Object,
  },
};
</script>

<template>
  <section>
    <h3 class="f5 mt0">Border Radius Scale</h3>
    <box-scale-grid class="mb5"
      :scale="borderRadius.scale"
      show-value />

    <h3 class="f5">Border Radius Position</h3>
    <p>Allows you to control the border radius position when paired with one of the a border scale classed.</p>
    <box-scale-grid class="mb5"
      :scale="borderRadius.positional" />

    <h3 class="f5">Border Width Scale</h3>
    <box-scale-grid class="mb5"
      :scale="borderWidths.scale"
      show-value />

    <h3 class="f5">Border Width Resets</h3>
    <p>Allows you to set the border width, of a specific direction, to <code>0</code>.</p>
    <box-scale-grid
      :scale="borderWidths.resets" />
  </section>
</template>
