<script setup lang="ts">
import { ref } from '@vue/runtime-core'
import { callApi } from '../hooks/baseApi'
import { colours } from '../constants/PokemonsColors'
import { pokeInfo } from '../types/PokeInfos'

const infos = ref()
const props = defineProps<{
  pokemon: string
}>()

const result: pokeInfo = await callApi(`pokemon/${props.pokemon}`)

const pokemonType =
  Object.keys(colours).find((name) => name === result.types[0].type.name) || ''

const pokemonSecondType =
  Object.keys(colours).find((name) => name === result.types[1]?.type.name) || ''

const pokemonColor = colours[pokemonType].background
const pokemonPrimaryForeground = colours[pokemonType].foreground
const pokemonSecondaryForeground = pokemonSecondType
  ? colours[pokemonSecondType].foreground
  : ''

infos.value = { ...result }

function handleNumber(number: number | undefined) {
  if (!number) {
    return 0
  }
  if (number < 10) {
    return `00${number}`
  }
  if (number < 100) {
    return `0${number}`
  } else {
    return number
  }
}

function handleFirstLetterUppercase(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
</script>
<template>
  <div class="cardContainer">
    <img
      loading="lazy"
      class="image"
      :src="infos.sprites.other['official-artwork'].front_default"
      alt=""
    />
    <p class="name">
      #{{ handleNumber(infos.id) }}
      {{ handleFirstLetterUppercase(infos.name) }}
    </p>
    <div>
      <button class="button primaryType">{{ pokemonType }}</button>
      <button class="button secondType" v-if="pokemonSecondType !== ''">
        {{ pokemonSecondType }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.cardContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  width: 100%;
  background-color: v-bind(pokemonColor);
  border-radius: 15px;
  position: relative;
  font-family: 'Poppins';
  font-weight: 600;
}

.image {
  transform: translate(0, -20%);
  transform-origin: (0, -10%);
  width: 80%;
}

.name {
  position: relative;
}

.button {
  padding: 0 20px;
  border: none;
  font-family: 'Poppins';
  margin: 0 10px;
  border-radius: 5px;
}

.primaryType {
  background-color: v-bind(pokemonPrimaryForeground);
}

.secondType {
  background-color: v-bind(pokemonSecondaryForeground);
}
</style>
