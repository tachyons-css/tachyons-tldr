<script>
import { mapGetters } from 'vuex';
import ClassNameSearch from '../components/ClassNameSearch';
import ClassNamesList from '../components/ClassNamesList';

export default {
  name: 'class-names-view',
  components: { ClassNameSearch, ClassNamesList },
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
    <class-name-search class="mb5 mw7 center" />
    <class-names-list class="mb5 mw7 center"
      :classNames="searchResults" />
  </div>
</template>
