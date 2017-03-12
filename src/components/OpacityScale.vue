<script>
export default {
  name: 'spacing-scale',
  props: {
    scale: Object,
  },
};
</script>

<template>
  <div class="flex flex-wrap">

    <div v-for="(value, selector) in scale"
      class="w4 h4 pa3 mr3 mb3 relative flex items-center justify-center ba b--moon-gray code f6">
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-checkered z--1"
        :class="selector">
      </div>
      .{{ selector }}
    </div>

  </div>
</template>
