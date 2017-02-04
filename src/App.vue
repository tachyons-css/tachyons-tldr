<template>
  <div id="app"
    class="mw7 center ph3 dark-gray sans-serif">

    <header class="mt6">
      <h1 class="tc f6 mt0">Tachyons</h1>
    </header>

    <class-name-search class="mt4" />

    <ul>
      {{ searchResult.name }}
      <li v-for="className in searchResult.classes">
        {{ className }}
      </li>
    </ul>

    <!-- <ul>
      <li v-for="(classNames, property) in properties">
        {{ property }}
        <ul>
          <li v-for="className in classNames">
            {{ className }}
          </li>
        </ul>
      </li>
    </ul> -->

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
