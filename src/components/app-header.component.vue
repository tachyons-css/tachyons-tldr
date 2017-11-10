<script>
import AnimatedLine from './animated-line.component';
import Navigation from './navigation.component';
import NavLink from './nav-link.component';

export default {
  name: 'app-header',
  components: { AnimatedLine, Navigation, NavLink },
  props: {
    version: String,
  },
  computed: {
    navIndicatorLocation() {
      const index = this.$store.state.route.meta.index;
      return `${(64 + 16) * index}px`;
    },
  },
};
</script>

<template>
  <header class="flex">
    <h1 class="tc f4 mv0 watermelon">
      <a class="color-inherit link dim"
        href="https://github.com/winkerVSbecks/tachyons-tldr"
        target="blank">
        tachyons tldr
      </a>
      <small class="fw2 mid-gray">{{ version }}</small>
    </h1>

    <div class="flex-auto"></div>

    <div>
      <navigation>
        <nav-link class="mr3"
          to="/">
          Classes
        </nav-link>
        <nav-link class="mr3"
          to="/scales">
          Scales
        </nav-link>
        <nav-link class="mr3"
          to="/palette">
          Palette
        </nav-link>
        <nav-link to="/tools">
          Tools
        </nav-link>
      </navigation>
      <animated-line class="watermelon"
        :size="64"
        :location="navIndicatorLocation" />
    </div>
  </header>
</template>
