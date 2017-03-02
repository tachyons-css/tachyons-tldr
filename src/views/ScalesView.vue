<script>
import { mapGetters } from 'vuex';
import TypeScale from '../components/TypeScale';

export default {
  name: 'app',
  components: { TypeScale },
  computed: {
    ...mapGetters(['searchResults']),
    ...mapGetters('tachyons', ['typeScale']),
  },
};
</script>

<template>
  <div>
    <div class="mw8 center">
      <h3 class="mt0 mb4">Type</h3>
      <type-scale :scale="typeScale" />
    </div>
  </div>
</template>
