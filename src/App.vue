<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'app',
  components: { AppHeader },
  data() {
    return {
      transitionName: 'slide-right',
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.meta.index;
      const fromDepth = from.meta.index;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    },
  },
};
</script>

<template>
  <div id="app"
    class="dark-gray sans-serif relative">

    <app-header></app-header>

    <transition :name="transitionName">
      <main is="router-view" class="absolute w-100 ph3 slide"></main>
    </transition>

  </div>
</template>

<style>
  .slide {
    transition: transform .6s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .slide-left-enter,
  .slide-right-leave-active {
    transform: translate(100%, 0);
  }
  .slide-left-leave-active,
  .slide-right-enter {
    transform: translate(-100%, 0);
  }
</style>
