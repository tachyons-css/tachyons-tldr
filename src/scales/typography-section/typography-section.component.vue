<script>
import { SrcLink } from 'components';
import TypeScaleGrid from './type-scale-grid.component';

export default {
  name: 'typography-section',
  components: {
    TypeScaleGrid,
    SrcLink,
  },
  props: {
    typeScale: Object,
    fontWeight: Object,
  },
};
</script>

<template>
  <section>
    <src-link to="type-scale">
      <h3 class="f5 mv0 black-70">Type Scale</h3>
    </src-link>
    <type-scale-grid class="b mb5"
      :scale="typeScale"
      show-grid />

    <src-link to="font-weight">
      <h3 class="f5 mv0 black-70">Font Weights</h3>
    </src-link>
    <type-scale-grid class="f1"
      :scale="fontWeight" />
  </section>
</template>
