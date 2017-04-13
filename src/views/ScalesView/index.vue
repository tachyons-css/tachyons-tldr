<script>
import R from 'ramda';
import { mapGetters, mapState, mapMutations } from 'vuex';
import SectionMenuItem from '../../components/SectionMenuItem';
import SectionMenu from '../../components/SectionMenu';
import SpacingSection from './SpacingSection';
import TypographySection from './TypographySection';
import WidthsSection from './WidthsSection';
import HeightsSection from './HeightsSection';
import BorderSection from './BorderSection';
import ShadowSection from './ShadowSection';
import OpacitySection from './OpacitySection';

// var last_known_scroll_position = 0;
// var ticking = false;
//
// function doSomething(scroll_pos) {
//   // do something with the scroll position
// }
//
// window.addEventListener('scroll', function(e) {
//   last_known_scroll_position = window.scrollY;
//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });
//   }
//   ticking = true;
// });

export default {
  name: 'scales-view',
  components: {
    SpacingSection,
    TypographySection,
    WidthsSection,
    HeightsSection,
    BorderSection,
    ShadowSection,
    OpacitySection,
    SectionMenuItem,
    SectionMenu,
  },
  mounted() {
    const locations = R.compose(
      R.map(n => n.$el.getBoundingClientRect().top),
      R.values,
    )(this.$refs);
    console.log(locations);

    const threshold = window.innerHeight * 0.25;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const idx = R.findIndex(location => Math.abs(location - scrollY) < threshold, locations);
      if (idx > -1) this.selectScaleCategory(idx);
    });
  },
  destroyed() {
    window.removeEventListener('scroll', () => {});
  },
  computed: {
    ...mapState('ui', ['scales']),
    ...mapGetters(['searchResults']),
    ...mapGetters('tachyons', [
      'typeScale', 'fontWeight',
      'widths', 'maxWidths',
      'borderRadius', 'borderWidths',
      'heights',
      'spacingScale',
      'opacityScale',
      'shadowScale',
    ]),
  },
  methods: {
    ...mapMutations('ui', ['selectScaleCategory']),
    goTo(category, idx) {
      this.selectScaleCategory(idx);
      if (this.$refs[category]) {
        this.$refs[category].$el
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
        <spacing-section data-section-index="0" ref="Spacing"
          class="pt4 mb6"
          :spacingScale="spacingScale" />
        <TypographySection data-section-index="1" ref="Typography"
          class="pt4 mb6"
          :typeScale="typeScale"
          :fontWeight="fontWeight" />
        <widths-section data-section-index="2" ref="Widths"
          class="pt4 mb6"
          :widths="widths"
          :maxWidths="maxWidths" />
        <heights-section data-section-index="3" ref="Heights"
          class="pt4 mb6"
          :heights="heights" />
        <border-section data-section-index="4" ref="Border"
          class="pt4 mb6"
          :borderRadius="borderRadius"
          :borderWidths="borderWidths" />
        <shadow-section data-section-index="5" ref="Shadow"
          class="pt4 mb6"
          :shadowScale="shadowScale" />
        <opacity-section data-section-index="6" ref="Opacity"
          class="pt4 mb6"
          :opacityScale="opacityScale" />
      </div>
    </div>
  </div>
</template>
