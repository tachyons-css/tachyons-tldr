<script>
export default {
  name: 'class-names-item',
  props: {
    className: {
      type: Object,
      default: {},
    },
  },
};
</script>

<template>
  <div class="flex items-center pa3">
    <div class="w-40 b">
      {{ className.name }}
    </div>
    <div class="ml3 flex-auto">
      <ul class="list pl0">
        <li v-for="(value, prop) in className.value">
          {{ prop }}: {{ Array.isArray(value) ? value[0] : value }}
        </li>
      </ul>
    </div>
  </div>
</template>
