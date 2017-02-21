<script>
import AnimatedLine from './AnimatedLine';
import Navigation from './Navigation';
import NavLink from './NavLink';

export default {
  name: 'app-header',
  components: { AnimatedLine, Navigation, NavLink },
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
    <h1 class="tc f4 mv0 watermelon">
      tachyons tldr
      <small class="fw2">v4.6.1</small>
    </h1>

    <div class="flex-auto"></div>

    <div>
      <navigation>
        <nav-link to="/">
          Classes
        </nav-link>
        <nav-link to="/scales">
          Scales
        </nav-link>
        <nav-link to="/palette">
          Palette
        </nav-link>
      </navigation>
      <animated-line class="watermelon"
        :size="64"
        :location="navIndicatorLocation" />
    </div>
  </header>
</template>
