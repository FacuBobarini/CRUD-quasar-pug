import { route } from 'quasar/wrappers';
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

import routes from './routes';

export default route(function () {

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createWebHashHistory(),
  });

  return Router;
});