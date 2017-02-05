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

    <div class="code mb5 mw7 center">

      <div class="flex items-center mb3 bt-0 bl-0 br-0 bb b--dark-gray bw1 pb3">
        <h3 class="f5 w-30 ma0">
          selector
        </h3>
        <h3 class="f5 flex-auto ma0">rulesets</h3>
        <h3 class="f5 w-20 ma0">breakpoints</h3>
      </div>

      <div class="flex items-center mt3 ph3"
        v-for="tachyonsClass in searchResult.classes">
        <div class="w-30">
          {{ tachyonsClass.name }}
        </div>
        <!-- <pre class="flex-auto">{{
          JSON.stringify(tachyonsClass.value, null, 2)
        }}</pre> -->
        <div class="flex-auto">
          <ul class="list pl0">
            <li v-for="(value, prop) in tachyonsClass.value">
              {{ prop }}: {{ Array.isArray(value) ? value[0] : value }}
            </li>
          </ul>
        </div>
        <div class="w-20 tc">
          {{ tachyonsClass.mqNames.length > 0 ? '✅' : '❌' }}
          <!-- <ul class="list">
            <li v-for="mqClassName in tachyonsClass.mqNames">
              {{ mqClassName }}
            </li>
          </ul> -->
        </div>

      </div>
    </div>

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
