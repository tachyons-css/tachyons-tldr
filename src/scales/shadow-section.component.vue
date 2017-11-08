<script>
import { SrcLink } from 'components';
import BoxScaleGrid from './box-scale-grid.component';

export default {
  name: 'shadow-section',
  components: {
    BoxScaleGrid,
    SrcLink,
  },
  props: {
    shadowScale: Object,
  },
};
</script>

<template>
  <section>
    <src-link to="box-shadow">
      <h3 class="f5 mv0 black-70">Shadow Scale</h3>
    </src-link>
    <box-scale-grid
      :scale="shadowScale" />
  </section>
</template>
