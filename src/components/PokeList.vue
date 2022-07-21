<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import { callApi } from "../hooks/baseApi";
import PokeCard from "./PokeCard.vue";
type pokemon = {
  name: string;
  url: string;
};

const pokemons: Ref<pokemon[]> = ref([]);
const count = ref(1);

async function getPokes() {
  const { results } = await callApi(`pokemon?limit=${count.value++ * 20}`);
  pokemons.value = results;
}

onMounted(() => getPokes());
</script>

<template></template>

<style>
.read-the-docs {
  color: #888;
}

svg {
  width: 100%;
  height: 100%;
}
</style>
