<script>
import { SrcLink } from 'components';
import OpacityScale from './opacity-scale.component';

export default {
  name: 'opacity-section',
  components: {
    OpacityScale,
    SrcLink,
  },
  props: {
    opacityScale: Object,
  },
};
</script>

<template>
  <section>
    <src-link to="opacity">
      <h3 class="f5 mv0 black-70">Opacity Scale</h3>
    </src-link>
    <opacity-scale
      :scale="opacityScale" />
  </section>
</template>
