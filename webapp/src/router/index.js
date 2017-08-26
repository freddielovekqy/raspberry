import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Weather from '@/components/weather/Weather'

import Page1 from '@/components/Page1'
import UserProfile from '@/components/UserProfile'
import UserProfile2 from '@/components/UserProfile2'



Vue.use(Router)

import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://localhost:8090');


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Weather',
      component: Weather
    }, {
      path: '/page1',
      name: 'Page1',
      component: Page1,
      children: [
        {
          path: 'profile',
          component: UserProfile
        }, {
          path: 'profile2',
          component: UserProfile2
        }
      ]
    }
  ]
})
