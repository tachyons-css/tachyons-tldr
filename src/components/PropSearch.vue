<script>
import { mapState, mapActions } from 'vuex';
import Terminal from './Terminal';
import FieldLabel from './FieldLabel';
import TextInput from './TextInput';

export default {
  name: 'prop-search',
  components: { Terminal, FieldLabel, TextInput },
  computed: {
    ...mapState([
      'propNameQuery',
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
    <fieldset class="bn ma0 pa0 mt4 code">
      <div class="flex items-baseline">

        <field-label :hide="true"
          htmlFor="query">
          CSS Property Query
        </field-label>

        <span class="mr2">$ tldr</span>

        <text-input class="flex-auto"
          placeholder="search for a CSS property name"
          type="search"
          name="query"
          focus
          :value="propNameQuery"
          @change="searchForProp({ query: $event })" />
      </div>
    </fieldset>
  </terminal>
</template>
