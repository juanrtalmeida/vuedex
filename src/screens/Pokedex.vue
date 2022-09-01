<template>
  <h1>Wanna know them all?</h1>
  <PokeList />
</template>

<script setup>
import { PokeList } from '../components/'
import { useColorMode } from '../hooks/useColorMode'
const { textColors } = useColorMode()
</script>

<style>
h1 {
  text-align: center;
  font-family: 'Poppins';
  color: v-bind(textColors);
  font-size: 52px;
  margin: 50px 0;
}
</style>
