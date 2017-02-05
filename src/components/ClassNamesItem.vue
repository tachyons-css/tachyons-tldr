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
  <div class="flex items-center mt3 ph3">
    <div class="w-30">
      {{ className.name }}
    </div>
    <!-- <pre class="flex-auto">{{
      JSON.stringify(className.value, null, 2)
    }}</pre> -->
    <div class="flex-auto">
      <ul class="list pl0">
        <li v-for="(value, prop) in className.value">
          {{ prop }}: {{ Array.isArray(value) ? value[0] : value }}
        </li>
      </ul>
    </div>
    <div class="w-20 tc">
      {{ className.mqNames.length > 0 ? '✅' : '❌' }}
      <!-- <ul class="list">
        <li v-for="mqClassName in className.mqNames">
          {{ mqClassName }}
        </li>
      </ul> -->
    </div>

  </div>
</template>
