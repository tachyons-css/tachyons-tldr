<script>
import { mapState, mapActions } from 'vuex';
import Terminal from './Terminal';
import FieldLabel from './FieldLabel';
import TextField from './TextField';

export default {
  name: 'tldr-search',
  components: { Terminal, FieldLabel, TextField },
  computed: {
    ...mapState([
      'classNames',
      'terminal',
    ]),
  },
  methods: {
    ...mapActions([
      'searchForProp',
      'activateTerminal',
      'deactivateTerminal',
    ]),
  },
  mounted() {
    setTimeout(() => {
      this.$refs.input.$el.focus();
    }, 800);
  },
};
</script>

<template>
  <terminal title="Tachyons" class="animated-shadow"
    :class="{ active: terminal.isActive }">
    <div class="code flex items-center ph3">

      <label is="field-label"
        for="query"
        hide>
        tldr Query
      </label>

      <span class="b pv3 pr3 br b--black-20">
        $ <span class="persian-green">tldr</span>
      </span>

      <text-field
        ref="input"
        class="flex-auto code pv3 mh3"
        placeholder="search for a CSS property name or class name"
        type="search"
        name="query"
        :value="classNames.query"
        @change="searchForProp({ query: $event })"
        @blur.native="deactivateTerminal()"
        @click.native="activateTerminal()"
        @focus.native="activateTerminal()" />

      <label is="field-label"
        slot="flags"
        class="pl3 pv3 pointer b bl b--black-20">
        <input type="checkbox"> --by-class-name
      </label>

    </div>
  </terminal>
</template>
