<script setup lang="ts">
import { callApi } from '@/hooks/baseApi'
import { pokeInfo } from '@/types/PokeInfos'
import { ref } from '@vue/reactivity'

const infos = ref<pokeInfo>()
const props = defineProps<{ id: string }>()
async function loadPokemon() {
  const result: pokeInfo = await callApi(`pokemon/${props.id}`)
  infos.value = { ...result }
}
loadPokemon()
</script>
<template>
  <h1>{{ infos?.name }}</h1>
</template>

<style></style>
