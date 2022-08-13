<template>
  <div class="container">
    <div class="ballsWrapper">
      <SelectionPokeball :pokemon="1" />
      <SelectionPokeball :pokemon="2" />
      <SelectionPokeball :pokemon="3" />
    </div>
    <div class="textWrapper">
      <div>
        <h1>
          Select your <br />
          <span>Starter Pokemon</span>
        </h1>
        <p>Hover on the pokeballs and click the selected starter</p>
      </div>
      <div class="textSide"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useColorMode } from "../hooks/useColorMode";
import { SelectionPokeball } from "../components";
const { textColors } = useColorMode();
</script>

<style scoped>
.container {
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  flex: 1;
  justify-content: space-around;
  align-items: center;
}
.ballsWrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 400px;
  justify-content: space-around;
  align-items: space-around;
  border-radius: 42px;
  background: linear-gradient(145deg, #525151, #646161);
}

.textWrapper {
  display: flex;
}

.textSide {
  flex: 1;
  width: 5px;
  margin-left: 20px;
  min-height: 80%;
  border-radius: 5px 0 0 5px;
  background-color: #646161;
}

h1 {
  font-size: 58px;
  margin-top: 0;
}
h1 span {
  background: -webkit-linear-gradient(rgb(118, 204, 101), rgb(98, 250, 179));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  margin-bottom: 0;
}
h1,
p {
  text-align: right;
  font-family: "Poppins";
  color: v-bind(textColors);
}
</style>
