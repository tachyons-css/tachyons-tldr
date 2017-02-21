<script>
import { mapGetters } from 'vuex';
import TldrSearch from '../components/TldrSearch';
import ClassNamesList from '../components/ClassNamesList';

export default {
  name: 'class-names-view',
  components: { TldrSearch, ClassNamesList },
  computed: {
    ...mapGetters([
      'searchResults',
    ]),
  },
  beforeMount() {
    this.$store.dispatch('parseClasses');
  },
};
</script>

<template>
  <div>
    <tldr-search class="mw7 center" />
    <class-names-list class="mb5 mw7 center"
      :classNames="searchResults" />
  </div>
</template>
