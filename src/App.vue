<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-right',
    };
  },
  computed: {
    ...mapState('tachyons', ['version']),
  },
  methods: {
    ...mapMutations('tachyons', ['loadStyles']),
  },
  beforeMount() {
    this.loadStyles();
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

    <div class="ph3">
      <app-header class="mt5 mb6 mw8 center"
        :version="version" />
    </div>

    <transition :name="transitionName">
      <router-view class="absolute ph3 mb5 w-100 swift-out">
      </router-view>
    </transition>

  </div>
</template>
