<script>
import anime from 'animejs';

function animateLine(size, el, cb) {
  anime({
    targets: el,
    duration: 400,
    delay: 1600,
    easing: 'easeInOutCubic',
    strokeDashoffset: () => {
      const pathLength = size;
      el.setAttribute('stroke-dasharray', size);
      return [pathLength, 0];
    },
    complete: cb,
  });
}

export default {
  name: 'animated-line',
  props: {
    location: { type: String, default: '0px' },
    size: { size: Number, default: 64 },
  },
  computed: {
    lineStyles() {
      return {
        transform: `translateX(${this.location})`,
        height: '4px',
        width: this.size,
      };
    },
  },
  methods: {
    appear(el, done) {
      animateLine(this.size, el, done);
    },
  },
};
</script>

<template>
  <svg class="db swift-out"
    :style="lineStyles"
    viewBox="0 0 64 2"
    preserveAspectRatio="none">

    <transition appear
      :css="false"
      @appear="appear">
      <path fill="none"
        stroke="currentColor"
        stroke-width="1px"
        d="M0,1 L64,1" />
    </transition>

  </svg>
</template>
