<script>
import OpacityScale from './opacity-scale.component';

export default {
  name: 'opacity-section',
  components: {
    OpacityScale,
  },
  props: {
    opacityScale: Object,
  },
};
</script>

<template>
  <section>
    <h3 class="f5 mt0">Opacity Scale</h3>
    <opacity-scale
      :scale="opacityScale" />
  </section>
</template>
