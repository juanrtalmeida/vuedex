<template>
  <h1>hello pokedex</h1>
  <Suspense>
    <template #default>
      <PokeList />
    </template>
    <template #fallback>
      <Spinner />
    </template>
  </Suspense>
</template>

<script setup>
import { PokeList, Spinner } from "../components/";
</script>

<style></style>
