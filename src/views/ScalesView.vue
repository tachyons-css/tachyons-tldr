<script>
import { mapGetters } from 'vuex';
import TypeScale from '../components/TypeScale';

export default {
  name: 'app',
  components: { TypeScale },
  computed: {
    ...mapGetters(['searchResults']),
    ...mapGetters('tachyons', ['typeScale', 'fontWeight']),
  },
};
</script>

<template>
  <div>
    <div class="mw8 center">
      <h3 class="f6 ttu tracked">Type Scale</h3>
      <type-scale class="b mb6"
        :scale="typeScale"
        showGrid />

      <h3 class="f6 ttu tracked">Font Weights</h3>
      <type-scale class="f1"
        :scale="fontWeight" />
    </div>
  </div>
</template>
