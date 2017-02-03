<template>
  <form class="pa3 br2-ns ba b--black-20 bg-white flex-auto">
    <div class="relative">
      <div class="absolute left-0">
        <span class="br-100 w1 h1 dib bg-light-red"></span>
        <span class="br-100 w1 h1 dib bg-gold"></span>
        <span class="br-100 w1 h1 dib bg-green"></span>
      </div>
      <h1 class="f6 fw6 tc mv0">{{ title }}</h1>
    </div>

    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'terminal',
  props: {
    title: String,
  },
};
</script>
