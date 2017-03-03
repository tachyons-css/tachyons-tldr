<script>
import { mapGetters } from 'vuex';
import TypeScaleGrid from '../components/TypeScaleGrid';
import WidthScaleGrid from '../components/WidthScaleGrid';

export default {
  name: 'app',
  components: { TypeScaleGrid, WidthScaleGrid },
  computed: {
    ...mapGetters(['searchResults']),
    ...mapGetters('tachyons', ['typeScale', 'fontWeight', 'widthScales']),
  },
};
</script>

<template>
  <div>
    <div class="mw8 center">
      <h3 class="f6 ttu tracked">Type Scale</h3>
      <type-scale-grid class="b mb5"
        :scale="typeScale"
        showGrid />

      <h3 class="f6 ttu tracked">Font Weight</h3>
      <type-scale-grid class="f1 mb6"
        :scale="fontWeight" />

      <h3 class="f6 ttu tracked">Width Scale</h3>
      <width-scale-grid class="mb5"
        :scale="widthScales.step" />

      <h3 class="f6 ttu tracked">Width Thirds</h3>
      <width-scale-grid class="mb5"
        :scale="widthScales.third" />

      <h3 class="f6 ttu tracked">Width Percentages</h3>
      <width-scale-grid class="mb6"
        :scale="widthScales.percent" />
    </div>
  </div>
</template>
