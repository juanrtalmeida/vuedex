<template>
  <h1>Select your Starter Pokemon</h1>
  <p>Hover on the pokeballs and click the selected starter</p>
  <div class="ballsWrapper">
    <SelectionPokeball :pokemon="1" />
    <SelectionPokeball :pokemon="2" />
    <SelectionPokeball :pokemon="3" />
  </div>
</template>

<script setup lang="ts">
import { SelectionPokeball } from "../components";
</script>

<style scoped>
.ballsWrapper {
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 600px;
  align-items: flex-end;
}

h1,
p {
  text-align: center;
  font-family: "Poppins";
}
</style>
