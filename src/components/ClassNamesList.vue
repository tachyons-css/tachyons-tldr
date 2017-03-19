<script>
import anime from 'animejs';
import ClassNamesItem from './ClassNamesItem';

export default {
  name: 'class-names-list',
  components: { ClassNamesItem },
  props: {
    classNames: Array,
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      anime({
        targets: el,
        delay: Math.min(1000, el.dataset.index * 80),
        opacity: [0, 1],
        translateY: ['-50%', 0],
        easing: 'easeOutCubic',
        duration: 600,
        complete: done,
      });
    },
    leave(el, done) {
      anime({
        targets: el,
        delay: Math.min(1000, el.dataset.index * 80),
        opacity: [1, 0],
        translateY: [0, '-50%'],
        easing: 'easeOutCubic',
        duration: 600,
        complete: done,
      });
    },
  },
};
</script>

<template>
  <div class="code">
    <transition-group
      tag="div"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave">
      <class-names-item
        v-for="(className, index) in classNames"
        :className="className"
        :key="className.name"
        :data-index="index"
        :class="{ 'bg-near-white': index % 2 !== 0 }" />
    </transition-group>
  </div>
</template>
