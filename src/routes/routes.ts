import { createRouter, createWebHistory } from 'vue-router'
import Selection from '../screens/Selection.vue'
import Home from '../screens/Home.vue'
import Pokedex from '../screens/Pokedex.vue'
import { PokemonDetail } from '../components/index'

export const history = createWebHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Selection
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/pokedex',
      component: Pokedex
    },
    {
      path: '/pokemon/:id',
      component: PokemonDetail,
      props: true
    }
  ]
})
