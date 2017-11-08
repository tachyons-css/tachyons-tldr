<script>
import SpacingScale from './spacing-scale.component';

export default {
  name: 'spacing-section',
  components: {
    SpacingScale,
  },
  props: {
    spacingScale: Object,
  },
};
</script>

<template>
  <section>
    <src-link to="spacing">
      <h3 class="f5 mv0 black-70">Spacing Scale</h3>
    </src-link>
    <p>An eight step powers of two scale ranging from 0 to 16rem.</p>
    <spacing-scale class="b mt4"
      :scale="spacingScale" />
  </section>
</template>
