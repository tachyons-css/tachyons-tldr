<template>
  <h1>Palette</h1>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'searchResults',
    ]),
  },
  beforeMount() {
    this.$store.dispatch('parseClasses');
  },
};
</script>
