<script>
import AnimatedLine from './AnimatedLine';

export default {
  name: 'app-header',
  components: { AnimatedLine },
  computed: {
    navIndicatorLocation() {
      const index = this.$store.state.route.meta.index;
      return `${(64 + 16) * index}px`;
    },
  },
};
</script>

<template>
  <header class="mt4 mb6 mw8 center ph3 flex">
    <h1 class="tc f5 mv0">
      tachyons tldr
      <small class="gray normal">v4.6.1</small>
    </h1>

    <div class="flex-auto"></div>

    <div>
      <nav class="tc lh-title flex mb1">
        <router-link to="/"
          class="link dim gray f6 dib mr3 w3"
          title="Home">
          classes
        </router-link>
        <router-link to="/scales"
          class="link dim gray f6 dib mr3 w3"
          title="About">
          scales
        </router-link>
        <router-link to="/palette"
          class="link dim gray f6 dib w3"
          title="Store">
          palette
        </router-link>
      </nav>
      <animated-line class="gray"
        :size="64"
        :location="navIndicatorLocation" />
    </div>
  </header>
</template>
