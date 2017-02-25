<script>
import { mapState } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapState('tachyons', ['colours']),
  },
};
</script>

<template>
  <div>
    <div class="mw7 center">
      <h1 class="mt0">Palette</h1>
      {{ colours }}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>
