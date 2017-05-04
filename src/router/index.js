import Vue from 'vue'
import Router from 'vue-router'
import CarouselManagement from './CarouselManagement/index.js'
import ResourceManagement from './ResourceManagement/index.js'
import SystemSettings from './SystemSettings/index.js'
import Move from './move'

Vue.use(Router)

const routes = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/resourceManagement'
    },
    CarouselManagement, ResourceManagement, SystemSettings, Move]
})
export default routes
