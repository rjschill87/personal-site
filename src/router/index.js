import Vue from 'vue';
import Router from 'vue-router';
import WelcomeCard from '@/components/WelcomeCard';
import About from '@/components/About';
import Party from '@/components/Party';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelcomeCard',
      component: WelcomeCard,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/party',
      name: 'Party!',
      component: Party
    }
  ],
});
