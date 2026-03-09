import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'
import HomePage from '@/components/HomePage.vue'
import Profile from '@/components/Profile.vue'
import Bundles from '@/components/Bundles.vue'
import GymLocations from '@/components/GymLocations.vue'
import Admin from '@/components/Admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'LandingPage',
      component: LandingPage,
    },
    {
      path:'/login',
      name:'Login',
      component: Login,
    },
    {
      path:'/signup',
      name:'Signup',
      component: SignUp,
    },
    {
      path:'/homepage',
      name:'Homepage',
      component: HomePage,
    },
    {
      path:'/profile',
      name:'Profile',
      component: Profile,
    },
    {
      path:'/bundles',
      name:'Bundles',
      component: Bundles,
    },
    {
      path:'/gym_locations',
      name:'Gym_locations',
      component: GymLocations,
    },
    {
      path:'/admin',
      name:'Admin',
      component: Admin,
    },

    
  ],
})

export default router
