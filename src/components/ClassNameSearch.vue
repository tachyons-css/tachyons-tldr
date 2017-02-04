<script>
import { mapState, mapActions } from 'vuex';
import Terminal from './Terminal';
import FieldLabel from './FieldLabel';
import TextInput from './TextInput';

export default {
  name: 'class-name-search',
  components: { Terminal, FieldLabel, TextInput },
  computed: {
    ...mapState([
      'classNames',
    ]),
  },
  methods: {
    ...mapActions([
      'searchForProp',
    ]),
  },
};
</script>

<template>
  <terminal title="Tachyons">
    <div class="code flex items-baseline">

      <label is="field-label"
        for="query"
        hide>
        CSS Property Query
      </label>

      <span class="mr2">$ tldr</span>

      <input is="text-input"
        class="flex-auto"
        placeholder="search for a CSS property name"
        type="search"
        name="query"
        focus
        :value="classNames.query"
        @change="searchForProp({ query: $event })" />
    </div>
  </terminal>
</template>
