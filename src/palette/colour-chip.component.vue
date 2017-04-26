<script>
export default {
  name: 'colour-chip',
  props: {
    colour: String,
    name: String,
  },
};
</script>

<template>
  <div>
    <div class="h3 relative flex items-center justify-center br1 br--top overflow-hidden bt br bl b--black-20">
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-checkered" />
      <div class="absolute top-0 right-0 bottom-0 left-0"
        :style="{ backgroundColor: colour }" />
    </div>
    <div class="bg-white flex-auto lh-copy pl2 pv1 bb br bl b--black-20 br1 br--bottom">
      <b class="db truncate dark-gray f6">{{ name }}</b>
      <code class="f6 truncate light-silver">{{ colour }}</code>
    </div>
  </div>
</template>
