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
      class="w4 h4 mr3 mb3 relative ba b--washed-red code f6 bg-checkered">
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-washed-red"
        :class="selector">
      </div>
      <div class="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center purple">
        .{{ selector }}
      </div>
    </div>

  </div>
</template>
