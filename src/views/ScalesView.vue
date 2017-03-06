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
      'widths',
      'borderRadius',
      'borderWidths',
      'heights',
    ]),
  },
};
</script>

<template>
  <div>
    <div class="mw8 center flex">
      <div class="w-100 w-90-l">
        <!-- Typography -->
        <h3 id="typography" class="f5">Type Scale</h3>
        <type-scale-grid class="b mb5"
          :scale="typeScale"
          show-grid />

        <h3 class="f5">Font Weights</h3>
        <type-scale-grid class="f1 mb6"
          :scale="fontWeight" />

        <!-- Widths -->
        <h3 id="width" class="f5">Width Scale</h3>
        <width-scale-grid class="mb5"
          :scale="widths.scale" />

        <h3 class="f5">Width – Thirds</h3>
        <width-scale-grid class="mb5"
          :scale="widths.third" />

        <h3 class="f5">Width – Percentage</h3>
        <width-scale-grid class="mb6"
          :scale="widths.percent" />

        <!-- Heights -->
        <h3 id="height" class="f5">Height Scale</h3>
        <box-scale-grid class="mb6 items-start"
          :scale="heights.scale" />

        <h3 class="f5">Height – Parent Percentage</h3>
        <box-scale-grid class="mb6 h5"
          :scale="heights.percent" />

        <h3 class="f5">Height – Viewport Percentage</h3>
        <box-scale-grid class="mb6"
          :scale="heights.vh" />

        <!-- Borders -->
        <h3 id="border" class="f5">Border Radius Scale</h3>
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
        <box-scale-grid class="mb6"
          :scale="borderWidths.resets" />
    </div>
    <div class="dn db-l">
      <ul class="list tr pl5"
        style="position: sticky; top: -1px;">
        <li><a class="pv2 pl2 db gray pointer ttu tracked f6 link no-underline"
          href="#typography">
          Typography
        </a></li>
        <li><a class="pv2 pl2 db gray pointer ttu tracked f6 link no-underline"
          href="#width">
          Width
        </a></li>
        <li><a class="pv2 pl2 db gray pointer ttu tracked f6 link no-underline"
          href="#height">
          Height
        </a></li>
        <li><a class="pv2 pl2 db gray pointer ttu tracked f6 link no-underline washed-pink bl b--washed-pink bw1"
          href="#border">
          Border
        </a></li>
        <li><a class="pv2 pl2 db gray pointer ttu tracked f6 link no-underline"
          href="#opacity">
          Opacity
        </a></li>
        <li><a class="pv2 pl2 db gray pointer ttu tracked f6 link no-underline"
          href="#shadow">
          Shadow
        </a></li>
      </ul>
    </div>
    </div>
  </div>
</template>
