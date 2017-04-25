<script>
export default {
  name: 'box-scale-grid',
  props: {
    scale: Object,
    showValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="flex flex-wrap">
    <div class="mr3 mb3"
      v-for="(step, selector, index) in scale">
      <div class="f6 code center flex items-center justify-center mb2"
        :class="[step.classNames, selector]">
        .{{ selector }}
      </div>

      <div v-if="showValue"
        class="mr3 tc f6 code w-100">
        ({{ step.value }})
      </div>
    </div>
  </div>
</template>
