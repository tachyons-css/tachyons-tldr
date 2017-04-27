<script>
import { ClipboardButton } from 'components';

export default {
  name: 'skin-css',
  components: { ClipboardButton },
  props: {
    cssString: { type: String, default: '' },
  },
  data() {
    return { confirmationVisible: false };
  },
  methods: {
    onCopy() {
      this.confirmationVisible = true;
      setTimeout(() => {
        this.confirmationVisible = false;
      }, 2000);
    },
  },
};
</script>

<template>
  <div class="relative flex-auto flex">

    <transition name="fade">
      <div
        v-if="confirmationVisible"
        class="b absolute bottom-1 left-1 pa3 bg-light-silver black-70">
        Copied!
      </div>
    </transition>

    <pre class="flex-auto ba bw1 b--persian-green ma0 code ph3 overflow-scroll">{{
      cssString
    }}</pre>

    <clipboard-button
      :text="cssString"
      @copy="onCopy"
      class="bn white bg-persian-green f6"
    />

  </div>
</template>
