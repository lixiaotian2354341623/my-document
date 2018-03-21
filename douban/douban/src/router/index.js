import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/home.vue'
import Audio from '../pages/Audio/adio.vue'
import Broatcost from '../pages/Broatcost/broatcost.vue'
import Mine from '../pages/Mine/mine.vue'
import Group from '../pages/Group/group.vue'
import Css from '../assets/css/reset.css'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Audio',
      name: 'Adio',
      component:Audio
    },
    {
      path: '/Group',
      name: 'Group',
      component: Group
    },
    {
      path: '/Broatcost',
      name: 'Broatcost',
      component: Broatcost
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    }
  ]

})
