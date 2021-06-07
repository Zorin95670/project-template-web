import Vue from 'vue';
import Router from 'vue-router';
import Page404 from '@/views/Page404.vue';
import ApplicationSettings from '@/components/commons/ApplicationSettings.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/settings',
      name: 'settings',
      component: ApplicationSettings,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Page not found.',
      component: Page404,
    },
  ],
});
