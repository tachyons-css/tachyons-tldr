<script>
export default {
  name: 'type-scale',
  props: {
    scale: Object,
  },
  methods: {
    toPx(rem) {
      return parseFloat(rem, 10) * 16;
    },
    getClassNames(selector) {
      return selector.replace(/(\n|\.)/g, '').trim().split(',');
    },
  },
};
</script>

<template>
  <div class="overflow-x-auto">
    <table class="dt--fixed collapse">
      <tbody>
        <tr class="debug-grid-bw">
          <td class="tc w4 b v-base pa0"
            :class="getClassNames(selector)"
            v-for="(value, selector) in scale">
            A
          </td>
        </tr>
        <tr>
          <td class="tc w4 pt2 gray fw2 code f6 v-btm"
            v-for="(value, selector) in scale">
              .{{ getClassNames(selector)[0] }} ({{ value }})
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
