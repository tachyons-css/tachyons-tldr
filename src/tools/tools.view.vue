<script>
import SkinGenerator from './skin-generator';
import MediaQueryfy from './media-queryfy';

export default {
  name: 'tools-view',
  components: { SkinGenerator, MediaQueryfy },
};
</script>

<template>
  <div>
    <div class="mw8 center">
      <skin-generator class="mb6"></skin-generator>
      <media-queryfy></media-queryfy>
    </div>
  </div>
</template>
