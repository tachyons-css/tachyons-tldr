<script>
export default {
  name: 'colour-block',
  props: {
    colour: Object,
    name: String,
  },
  computed: {
    blockStyles() {
      return {
        backgroundColor: this.colour.value,
        color: this.colour.negative,
      };
    },
  },
};
</script>

<template>
  <div class="pa3"
    :style="blockStyles">
    <b class="db truncate f6 mb1">{{ name }}</b>
    <code class="db f6 truncate">{{ colour.value }}</code>
  </div>
</template>
