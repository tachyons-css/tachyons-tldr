<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'app',
  components: { AppHeader },
};
</script>

<template>
  <div id="app"
    class="dark-gray sans-serif relative">

    <app-header></app-header>

    <transition name="slide-left">
      <router-view class="absolute w-100 ph3 slide"></router-view>
    </transition>

  </div>
</template>

<style>
  .slide {
    transition: transform .5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(30px, 0);
  }
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-30px, 0);
  }
</style>
