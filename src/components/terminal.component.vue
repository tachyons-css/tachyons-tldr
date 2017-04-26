<script>
import Terminal from './terminal.component';
import FieldLabel from './field-label.component';
import TextField from './text-field.component';

export default {
  name: 'terminal',
  components: { Terminal, FieldLabel, TextField },
  props: {
    command: String,
    value: String,
    isActive: Boolean,
  },
  mounted() {
    setTimeout(() => {
      this.$refs.input.$el.focus();
    }, 800);
  },
  methods: {
    onActivate(e) { this.$emit('activate', e); },
    onDeactivate(e) { this.$emit('deactivate', e); },
    onExecute(e) { this.$emit('execute', e); },
  },
};
</script>

<template>
  <div class="br2 ba b--black-20 bg-white animated-shadow"
    :class="{ active: isActive }">
    <div class="code flex items-center ph3">

      <label is="field-label"
        for="query"
        hide>
        {{ command }}
      </label>

      <span class="b pv3 pr3">
        $ <span class="persian-green">{{ command }}</span>
      </span>

      <text-field
        ref="input"
        class="flex-auto code pv3 ml3"
        placeholder="search for a CSS property name or class name"
        type="search"
        name="query"
        :value="value"
        @change="onExecute({ query: $event })"
        @blur.native="onDeactivate"
        @click.native="onActivate"
        @focus.native="onActivate" />

      <slot name="flag" />

    </div>
  </div>
</template>
