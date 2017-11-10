export { default as classNamesModule } from './class-names.module';

export default () => import(/* webpackChunkName: "class-names" */ './class-names.view');
