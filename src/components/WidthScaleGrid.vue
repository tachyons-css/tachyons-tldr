<script>
import anime from 'animejs';

export default {
  name: 'width-scale-grid',
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
        scaleX: {
          value: [0, 1],
          duration: 600,
          delay: 1200 + ((this.size - el.dataset.index) * 20),
        },
        onComplete: done,
      });
    },
  },
};
</script>

<template>
  <div class="flex">
    <div class="mr3">
      <div class="tr f6 h1 mb2 gray lh-solid fw3 code"
        v-for="(value, selector) in scale">
        .{{ getClassNames(selector)[0] }} ({{ value }})
      </div>
    </div>
    <transition-group appear
      tag="div"
      v-bind:css="false"
      @enter="enter"
      class="flex-auto">
      <div class="tc h1 origin-0-0 bg-light-gray mr3 mb2 br b--persian-green bw1"
        v-for="(value, selector, index) in scale"
        :key="index"
        :class="getClassNames(selector)"
        :data-index="index">
      </div>
    </transition-group>
  </div>
</template>
