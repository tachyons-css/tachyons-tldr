<script>
import hello from 'hello-color';

export default {
  name: 'colour-block',
  props: {
    colour: String,
    name: String,
  },
  methods: {
    blockStyles(colour) {
      return {
        backgroundColor: colour,
        color: hello(colour).color,
      };
    },
  },
};
</script>

<template>
  <div class="pa3"
    :style="blockStyles(colour)">
    <div>
      <b class="db truncate f6">{{ name }}</b>
      <code class="f6 truncate">{{ colour }}</code>
    </div>
  </div>
</template>
