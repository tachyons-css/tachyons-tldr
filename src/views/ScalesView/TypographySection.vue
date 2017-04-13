<script>
import TypeScaleGrid from '../../components/TypeScaleGrid';

export default {
  name: 'typography-section',
  components: {
    TypeScaleGrid,
  },
  props: {
    typeScale: Object,
    fontWeight: Object,
  },
};
</script>

<template>
  <section>
    <h3 class="f5 mt0">Type Scale</h3>
    <type-scale-grid class="b mb5"
      :scale="typeScale"
      show-grid />

    <h3 class="f5">Font Weights</h3>
    <type-scale-grid class="f1"
      :scale="fontWeight" />
  </section>
</template>
