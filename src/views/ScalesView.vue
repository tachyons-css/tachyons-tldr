<script>
import { polyfill } from 'scroll-behaviour';
import { mapGetters, mapState, mapMutations } from 'vuex';
import SectionMenuItem from '../components/SectionMenuItem';
import SectionMenu from '../components/SectionMenu';
import TypeScaleGrid from '../components/TypeScaleGrid';
import WidthScaleGrid from '../components/WidthScaleGrid';
import BoxScaleGrid from '../components/BoxScaleGrid';
import SpacingScale from '../components/SpacingScale';

polyfill();

export default {
  name: 'scales-view',
  components: {
    TypeScaleGrid,
    WidthScaleGrid,
    BoxScaleGrid,
    SectionMenuItem,
    SectionMenu,
    SpacingScale,
  },
  computed: {
    ...mapState('ui', ['scales']),
    ...mapGetters(['searchResults']),
    ...mapGetters('tachyons', [
      'typeScale',
      'fontWeight',
      'widths',
      'borderRadius',
      'borderWidths',
      'heights',
      'spacingScale',
    ]),
  },
  methods: {
    ...mapMutations('ui', ['selectScaleCategory']),
    goTo(category, idx) {
      this.selectScaleCategory(idx);
      if (this.$refs[category]) {
        this.$refs[category]
          .scrollIntoView({ block: 'top', behavior: 'smooth' });
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="mw8 center flex">

      <section-menu class="dn db-l mr5"
        :active-index="scales.activeCategoryIndex">
        <section-menu-item
          v-for="(category, idx) in scales.categories"
          :to="'#' + category"
          @click.native="goTo(category, idx)">
          {{ category }}
        </section-menu-item>
      </section-menu>

      <div class="w-100 w-90-l">
        <!-- Spacing -->
        <section ref="Spacing" class="pt3">
          <h3 class="f5 mt0">Spacing Scale</h3>
          <p>An eight step powers of two scale ranging from 0 to 16rem.</p>
          <spacing-scale class="b mb5 mt4"
            :scale="spacingScale" />
        </section>

        <!-- Typography -->
        <section ref="Typography" class="pt3">
          <h3 class="f5 mt0">Type Scale</h3>
          <type-scale-grid class="b mb5"
            :scale="typeScale"
            show-grid />

          <h3 class="f5">Font Weights</h3>
          <type-scale-grid class="f1 mb6"
            :scale="fontWeight" />
        </section>

        <!-- Widths -->
        <section ref="Width" class="pt3">
          <h3 class="f5 mt0">Width Scale</h3>
          <width-scale-grid class="mb5"
            :scale="widths.scale" />

          <h3 class="f5">Width – Thirds</h3>
          <width-scale-grid class="mb5"
            :scale="widths.third" />

          <h3 class="f5">Width – Percentage</h3>
          <width-scale-grid class="mb6"
            :scale="widths.percent" />
        </section>

        <!-- Heights -->
        <section ref="Height" class="pt3">
          <h3 class="f5 mt0">Height Scale</h3>
          <box-scale-grid class="mb6 items-start"
            :scale="heights.scale" />

          <h3 class="f5">Height – Parent Percentage</h3>
          <box-scale-grid class="mb6 h5"
            :scale="heights.percent" />

          <h3 class="f5">Height – Viewport Percentage</h3>
          <box-scale-grid class="mb6"
            :scale="heights.vh" />
        </section>

        <!-- Borders -->
        <section ref="Border" class="pt3">
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
          <box-scale-grid class="mb6"
            :scale="borderWidths.resets" />
        </section>
      </div>
    </div>
  </div>
</template>
