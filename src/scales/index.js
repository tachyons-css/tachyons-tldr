export { default as scalesModule } from './scales.module';

export default () => import(/* webpackChunkName: "scales" */ './scales.view');
