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
    <h1 class="tc f5 mv0">
      tachyons tldr
      <small class="gray normal">v4.6.1</small>
    </h1>

    <div class="flex-auto"></div>

    <div>
      <navigation>
        <nav-link to="/"
          title="Classes">
          classes
        </nav-link>
        <nav-link to="/scales"
          title="Scales">
          scales
        </nav-link>
        <nav-link to="/palette"
          title="Palette">
          palette
        </nav-link>
      </navigation>
      <animated-line class="gray"
        :size="64"
        :location="navIndicatorLocation" />
    </div>
  </header>
</template>
