<template>
  <div id="app" class="mw7 ph3 code">
    <h1>Tachyons Decrypt</h1>

    <form class="bg-light-red mw7 center pa4 br2-ns ba b--black-10">
      <fieldset class="cf bn ma0 pa0">
        <legend class="pa0 f5 f4-ns mb3 black-80">Search for a CSS property name</legend>
        <div class="cf">
          <label class="clip" for="query">CSS Property Query</label>
          <input class="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 br2"
            placeholder="Hyphenated or camel case property names"
            type="search"
            name="query"
            value=""
            id="query">
        </div>
      </fieldset>
    </form>


    <ul>
      <li v-for="(classNames, property) in properties">
        {{ property }}
        <ul>
          <li v-for="className in classNames">
            {{ className }}
          </li>
        </ul>
      </li>
    </ul>

  </div>
</template>

<script>
import Hello from './components/Hello';
import classesGroupedByPropName from './styles';

export default {
  name: 'app',
  components: {
    Hello,
  },
  computed: {
    properties() {
      return classesGroupedByPropName;
    },
  },
};
</script>
