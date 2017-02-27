<script>
import { mapState } from 'vuex';
import ColourChip from '../components/ColourChip';

export default {
  name: 'app',
  components: { ColourChip },
  computed: {
    ...mapState('tachyons', ['colours']),
  },
};
</script>

<template>
  <div>
    <div class="mw8 center">

      <h2>Solid</h2>
      <div class="mb5 flex flex-wrap">
        <colour-chip class="w-40 w-25-m w-25-l mb3 pr3 flex-auto"
          v-for="(colour, name) in colours.solid"
          :colour="colour"
          :name="name" />
      </div>

      <h2>Alpha</h2>
      <div class="flex flex-wrap">
        <colour-chip class="w-40 w-25-m w-20-l mb3 pr2 flex-auto"
          v-for="(colour, name, index) in colours.alpha"
          :colour="colour"
          :name="name" />
      </div>
    </div>
  </div>
</template>
