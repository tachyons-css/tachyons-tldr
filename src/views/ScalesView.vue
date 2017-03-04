<script>
import { mapGetters } from 'vuex';
import TypeScaleGrid from '../components/TypeScaleGrid';
import WidthScaleGrid from '../components/WidthScaleGrid';
import BoxScaleGrid from '../components/BoxScaleGrid';

export default {
  name: 'app',
  components: { TypeScaleGrid, WidthScaleGrid, BoxScaleGrid },
  computed: {
    ...mapGetters(['searchResults']),
    ...mapGetters('tachyons', [
      'typeScale',
      'fontWeight',
      'widthScales',
      'borderRadius',
    ]),
  },
};
</script>

<template>
  <div>
    <div class="mw8 center">
      <h3 class="f6 ttu tracked">Type Scale</h3>
      <type-scale-grid class="b mb5"
        :scale="typeScale"
        show-grid />

      <h3 class="f6 ttu tracked">Font Weights</h3>
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

      <h3 class="f6 ttu tracked">Border Radius Scale</h3>
      <box-scale-grid class="mb5"
        :scale="borderRadius.scale"
        show-value />

      <h3 class="f6 ttu tracked">Border Radius</h3>
      <p>when paired with a border scale class</p>
      <box-scale-grid class="mb6"
        :scale="borderRadius.positional" />
    </div>
  </div>
</template>
