<script setup lang="ts">
import { onMounted, ref } from "@vue/runtime-core";
import { callApi } from "../hooks/baseApi";

const infos = ref({});
const props = defineProps<{
  pokemon: string;
}>();
const pokemonName = props.pokemon;

async function getInfos() {
  const faca = await callApi(`pokemon/${props.pokemon}`);
  console.log(faca);
}
onMounted(() => getInfos());
</script>
<template>
  <h1>{{ pokemonName }}</h1>
</template>

<style></style>
