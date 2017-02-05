<template>
  <div id="app"
    class="dark-gray sans-serif ph3">

    <header class="mt6 mb5 mw8 center">
      <h1 class="tc f5 mt0">Tachyons tldr</h1>

      <nav class="tc mt3">
        <a class="link dim gray f6 f5-ns dib mr3" href="#" title="Home">classNames</a>
        <a class="link dim gray f6 f5-ns dib mr3" href="#" title="About">scales</a>
        <a class="link dim gray f6 f5-ns dib" href="#" title="Store">palette</a>
      </nav>
    </header>

    <class-name-search class="mb5 mw7 center" />

    <class-names-list class="mb5 mw7 center"
      :classNames="searchResults" />

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ClassNameSearch from './components/ClassNameSearch';
import ClassNamesList from './components/ClassNamesList';

export default {
  name: 'app',
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
