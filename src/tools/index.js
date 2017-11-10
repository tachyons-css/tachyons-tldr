export { default as toolsModule } from './tools.module';

export default () => import(/* webpackChunkName: "tools" */ './tools.view');
