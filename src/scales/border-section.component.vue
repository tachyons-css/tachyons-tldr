<script>
import { SrcLink } from 'components';
import BoxScaleGrid from './box-scale-grid.component';

export default {
  name: 'scales-view',
  components: {
    BoxScaleGrid,
    SrcLink,
  },
  props: {
    borderRadius: Object,
    borderWidths: Object,
  },
};
</script>

<template>
  <section>
    <src-link to="border-radius">
      <h3 class="f5 mv0 black-70">Border Radius Scale</h3>
    </src-link>
    <box-scale-grid class="mb5"
      :scale="borderRadius.scale"
      show-value />

    <src-link to="border-radius">
      <h3 class="f5 mv0 black-70">Border Radius Position</h3>
    </src-link>
    <p>Allows you to control the border radius position when paired with one of the a border scale classed.</p>
    <box-scale-grid class="mb5"
      :scale="borderRadius.positional" />

    <src-link to="border-widths">
      <h3 class="f5 mv0 black-70">Border Width Scale</h3>
    </src-link>
    <box-scale-grid class="mb5"
      :scale="borderWidths.scale"
      show-value />

    <src-link to="border-widths">
      <h3 class="f5 mv0 black-70">Border Width Resets</h3>
    </src-link>
    <p>Allows you to set the border width, of a specific direction, to <code>0</code>.</p>
    <box-scale-grid
      :scale="borderWidths.resets" />
  </section>
</template>
