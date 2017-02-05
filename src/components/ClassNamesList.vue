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
    /* eslint-disable */
    enter(el, done) {
      console.log(el.dataset.index * 50);
      anime({
        targets: el,
        delay: Math.min(1000, el.dataset.index * 50),
        opacity: [0, 1],
        translateZ: 0,
        translateY: ['-50%', 0],
        easing: 'easeOutExpo',
        onComplete: done,
      });
    },
    /* eslint-enable */
  },
};
</script>

<template>
  <div class="code">

    <div class="flex items-center mb3 bt-0 bl-0 br-0 bb b--dark-gray bw1 pb3">
      <h3 class="f5 w-30 ma0">
        selector
      </h3>
      <h3 class="f5 flex-auto ma0">ruleset</h3>
      <h3 class="f5 w-20 ma0">breakpoints</h3>
    </div>

    <transition-group name="staggered-fade"
      tag="div"
      :css="false"
      @enter="enter">
      <class-names-item
        v-for="(className, index) in classNames"
        :className="className"
        :key="className.name"
        :data-index="index"
        :class="{ 'bg-near-white': index % 2 === 0 }" />
    </transition-group>
  </div>
</template>
