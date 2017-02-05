<template>
  <div id="app"
    class="ph3 dark-gray sans-serif">

    <header class="mt6 mw8 center">
      <h1 class="tc f6 mt0">Tachyons tldr;</h1>

      <nav class="tc mt3">
        <a class="link dim gray f6 f5-ns dib mr3" href="#" title="Home">classNames</a>
        <a class="link dim gray f6 f5-ns dib mr3" href="#" title="About">scales</a>
        <a class="link dim gray f6 f5-ns dib" href="#" title="Store">palette</a>
      </nav>
    </header>

    <class-name-search class="mt5 mw7 center" />

    <ul class="code list pl0 mt5 mw8 center">
      <li class="flex mb3"
        v-for="(mqClassNames, className) in searchResult.classes">
        <div class="w-33">
          {{ className }}
        </div>
        <ul class="list pl0 flex-auto">
          <li v-for="mqClassName in mqClassNames">
            {{ mqClassName }}
          </li>
        </ul>
      </li>
    </ul>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ClassNameSearch from './components/ClassNameSearch';

export default {
  name: 'app',
  components: { ClassNameSearch },
  computed: {
    ...mapGetters([
      'searchResult',
    ]),
  },
  beforeMount() {
    this.$store.dispatch('parseClasses');
  },
};
</script>
