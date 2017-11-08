<script>
import { SrcLink } from 'components';
import BoxScaleGrid from './box-scale-grid.component';

export default {
  name: 'heights-section',
  components: {
    BoxScaleGrid,
    SrcLink,
  },
  props: {
    heights: Object,
  },
};
</script>

<template>
  <section>
    <src-link to="heights">
      <h3 class="f5 mv0 black-70">Height Scale</h3>
    </src-link>
    <box-scale-grid class="mb5 items-start"
      :scale="heights.scale" showValue />

    <src-link to="heights">
      <h3 class="f5 mv0 black-70">Height – Parent Percentage</h3>
    </src-link>
    <box-scale-grid class="mb5 h5"
      :scale="heights.percent" />

    <src-link to="heights">
      <h3 class="f5 mv0 black-70">Height – Viewport Percentage</h3>
    </src-link>
    <box-scale-grid
      :scale="heights.vh" />
  </section>
</template>
