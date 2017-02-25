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
  <div class="fl w-100 w-50-m w-25-l mb1">

    <div :style="{ backgroundColor: colour }"
      class="fl w-40 pv4" />

    <div class="fl w-60 lh-copy pl2 pt2">
      <b class="db">{{ name }}</b>
      <code class="f6">{{ colour }}</code>
    </div>

  </div>
</template>
