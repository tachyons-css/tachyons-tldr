<script>
import anime from 'animejs';

export default {
  name: 'type-scale-grid',
  props: {
    scale: Object,
    showGrid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    size() {
      return Object.keys(this.scale).length;
    },
  },
  methods: {
    getClassNames(selector) {
      return selector
        .replace(/(\n|\.)/g, '')
        .trim()
        .split(',');
    },
    enter(el, done) {
      anime({
        targets: el,
        easing: 'easeOutCubic',
        opacity: {
          value: [0, 1],
          duration: 600,
          delay: 1200 + ((this.size - el.dataset.index) * 50),
        },
        translateY: {
          value: [25, 0],
          duration: 400,
          delay: 1200 + ((this.size - el.dataset.index) * 50),
        },
        onComplete: done,
      });
    },
  },
};
</script>

<template>
  <div class="overflow-x-auto">
    <table class="dt--fixed collapse">
      <tbody>
        <transition-group
          :class="{ 'debug-grid-bw': showGrid }"
          appear
          tag="tr"
          v-bind:css="false"
          @enter="enter">
          <td class="tc w3 v-base pa0 mid-gray"
            v-for="(value, selector, index) in scale"
            :key="index"
            :class="getClassNames(selector)"
            :data-index="index"
          >A</td>
        </transition-group>
        <tr>
          <td class="tc w3 pt2 gray fw2 code f6 v-btm"
            v-for="(value, selector) in scale">
            .{{ getClassNames(selector)[0] }} ({{ value }})
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
