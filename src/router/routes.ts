import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'create', component: () => import('pages/Create.vue') },
      { path: 'read', component: () => import('pages/Read.vue') },
      { path: 'update', component: () => import('pages/Update.vue') },
      { path: 'delete', component: () => import('pages/Delete.vue') }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
