<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';
import Terminal from '../components/Terminal';
import FieldLabel from '../components/FieldLabel';
import ClassNamesList from '../components/ClassNamesList';

export default {
  name: 'class-names-view',
  components: { Terminal, ClassNamesList, FieldLabel },
  computed: {
    ...mapState([
      'classNames',
      'terminal',
    ]),
    ...mapGetters([
      'searchResults',
    ]),
  },
  methods: {
    ...mapActions(['loadStyles']),
    ...mapMutations([
      'searchForClassByProp',
      'activateTerminal',
      'deactivateTerminal',
    ]),
  },
  beforeMount() {
    this.loadStyles();
  },
};
</script>

<template>
  <div>
    <terminal class="mw7 center"
      command="tldr"
      :value="classNames.query"
      :isActive="terminal.isActive"
      @execute="searchForClassByProp($event)"
      @activate="activateTerminal"
      @deactivate="deactivateTerminal">

      <label is="field-label"
        slot="flag"
        class="ml3 pl3 pv3 pointer b bl b--black-20">
        <input type="checkbox"> --by-class-name
      </label>

    </terminal>

    <class-names-list class="mb5 mw7 center"
      :classNames="searchResults" />
  </div>
</template>
