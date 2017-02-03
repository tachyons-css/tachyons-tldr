<template>
  <div id="app" class="mw7 center ph3 dark-gray sans-serif">

    <div class="vh-100 flex items-center">
      <prop-search />
    </div>

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
import PropSearch from './components/PropSearch';
import classesGroupedByPropName from './styles';

export default {
  name: 'app',
  components: { PropSearch },
  computed: {
    properties() {
      return classesGroupedByPropName;
    },
  },
};
</script>
