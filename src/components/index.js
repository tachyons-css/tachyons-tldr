import Vue from 'vue';

const requireComponent = require.context('./', true, /\.component\.vue$/);

requireComponent.keys().forEach((fileName) => {
  let baseComponentConfig = requireComponent(fileName);

  baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
  const baseComponentName =
    baseComponentConfig.name ||
    fileName.replace(/^.+\//, '').replace(/\.\w+$/, '');

  Vue.component(baseComponentName, baseComponentConfig);
});
