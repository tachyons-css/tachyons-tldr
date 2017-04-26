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
    <div class="w-40">
      {{ className.name }}
      <!-- <button class="bn bg-transparent pointer"
        type="button"
        v-if="className.mqNames.length > 0">
        [+]
      </button> -->
      <!-- <ul class="list">
        <li v-for="mqClassName in className.mqNames">
          {{ mqClassName }}
        </li>
      </ul> -->
    </div>
    <div class="ml3 flex-auto">
      <ul class="list pl0">
        <li v-for="(value, prop) in className.value">
          {{ prop }}: {{ Array.isArray(value) ? value[0] : value }}
        </li>
      </ul>
    </div>
    <!-- <div class="w-10 tc">
      {{ className.mqNames.length > 0 ? '✅' : '❌' }}
    </div> -->
  </div>
</template>
