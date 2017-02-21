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
      const toIndex = to.meta.index;
      const fromIndex = from.meta.index;
      this.transitionName = (
        toIndex < fromIndex ? 'slide-right' : 'slide-left'
      );
    },
  },
};
</script>

<template>
  <div class="black-70 sans-serif">

    <app-header></app-header>

    <transition :name="transitionName">
      <router-view class="absolute ph3 w-100 swift-out">
      </router-view>
    </transition>

  </div>
</template>
