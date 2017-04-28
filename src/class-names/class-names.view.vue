<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import { FieldLabel } from 'components';
import ClassNamesList from './class-names-list.component';
import Terminal from './terminal.component';

export default {
  name: 'class-names-view',
  components: { Terminal, ClassNamesList, FieldLabel },
  computed: {
    ...mapState(['classNames']),
    ...mapGetters('classNames', ['searchResults']),
  },
  methods: {
    ...mapMutations('classNames', [
      'activateTerminal',
      'deactivateTerminal',
      'toggleSearchByClassName',
      'searchForClassByProp',
    ]),
  },
};
</script>

<template>
  <div>
    <terminal class="mw7 center"
      command="tldr"
      :value="classNames.query"
      :isActive="classNames.isActive"
      @execute="searchForClassByProp($event)"
      @activate="activateTerminal"
      @deactivate="deactivateTerminal">

      <label is="field-label"
        slot="flag"
        class="ml3 pl3 pv3 pointer b bl b--black-20">
        <input type="checkbox"
          :checked="classNames.byClassName"
          @change="toggleSearchByClassName">
          --by-class-name
      </label>

    </terminal>

    <class-names-list class="mb5 mw7 center"
      :classNames="searchResults" />
  </div>
</template>
