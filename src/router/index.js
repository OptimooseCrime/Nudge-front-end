import Vue from 'vue';
import Router from 'vue-router';
import Header from '@/components/Header';
import TheDash from '@/components/TheDash';
import Rules from '@/components/Rules';
import Wallet from '@/components/Wallet';
import Footer from '@/components/Footer';
// import Rules from '@/components/Rules';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/TheDash',
      name: 'TheDash',
      component: TheDash,
    },
    {
      path: '/Rules',
      name: 'Rules',
      component: Rules
    },
    {
      path: '/Wallet',
      name: 'Wallet',
      component: Wallet
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },
    
  ]
})
