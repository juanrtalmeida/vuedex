<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { callApi } from '../hooks/baseApi'
import { Spinner, PokeCard } from './'

type pokemon = {
  name: string
  url: string
}

const pokemons: Ref<pokemon[]> = ref([])
const count = ref(1)

async function getPokes() {
  const { results } = await callApi(`pokemon?limit=${count.value++ * 20}`)
  pokemons.value = results
}

onMounted(() => {
  getPokes()
})
</script>

<template>
  <div class="pokemonsContainer">
    <div v-for="pokemon in pokemons" :key="pokemon.name">
      <Suspense>
        <template #default>
          <PokeCard :pokemon="pokemon.name" />
        </template>
        <template #fallback>
          <Spinner />
        </template>
      </Suspense>
    </div>
  </div>
  <button class="button" @click="getPokes">Check for more pokemons</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.button {
  background: none;
  border: green 2px solid;
  color: white;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  max-width: 200px;
  font-size: 16px;
  border-radius: 10px;
  margin: 30px auto;
  cursor: pointer;
}

svg {
  width: 100%;
  height: 100%;
}

.pokemonsContainer {
  display: grid;
  place-content: space-around;
  row-gap: 70px;
  grid-template-columns: repeat(5, 250px);
}
</style>
