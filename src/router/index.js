import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About'
import Home from '@/views/Home'
import PortfolioOne from '@/views/Portfolio-one'
import PortfolioTwo from '@/views/Portfolio-two'
import PortfolioThree from '@/views/Portfolio-three'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/portfolio/one',
      name: 'portfolione',
      component: PortfolioOne
    },
    {
      path: '/portfolio/two',
      name: 'portfolitwo',
      component: PortfolioTwo
    },
    {
      path: '/portfolio/three',
      name: 'portfolithree',
      component: PortfolioThree
    }
  ],
  mode: 'history'
})
