<script>
import { mapState, mapActions } from 'vuex';
import Terminal from './Terminal';
import FieldLabel from './FieldLabel';
import TextField from './TextField';

export default {
  name: 'class-name-search',
  components: { Terminal, FieldLabel, TextField },
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

      <span class="mr2 b near-black lh-copy">$ tldr</span>

      <text-field
        class="flex-auto code lh-copy"
        placeholder="search for a tachyons class name or a CSS property name"
        type="search"
        name="query"
        focus
        :value="classNames.query"
        @change="searchForProp({ query: $event })" />
    </div>
  </terminal>
</template>
