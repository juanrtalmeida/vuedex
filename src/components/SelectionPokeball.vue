<template>
  <div class="selectionBallWrapper">
    <Pokeball @mouseenter="showPokemon(true)" @click="handleSelection" />
    <Transition>
      <div v-if="anything" class="selectorWrapper">
        <div class="arrow-down"></div>
        <div class="selectorContent">
          <img v-if="props.pokemon === 1" src="../assets/charizard.png" />
          <img v-if="props.pokemon === 2" src="../assets/bastoise.png" />
          <img v-if="props.pokemon === 3" src="../assets/venosaur.png" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useColors } from "../hooks/useColors";
import Pokeball from "./PokeBall.vue";

const anything = ref(false);
const color = ref("");
const rgb = ref("");

function showPokemon(setter: boolean) {
  anything.value = setter;
}

onMounted(() => {
  switch (props.pokemon) {
    case 1:
      color.value = "red";
      rgb.value = "rgba(255, 49, 0, 0.35)";
      break;
    case 2:
      color.value = "blue";
      rgb.value = "rgb(16, 112, 221, 0.35)";
      break;
    case 3:
      color.value = "green";
      rgb.value = "rgb(16, 221, 33, 0.35)";
      break;
  }
});
const { selectColor } = useColors();
const props = defineProps<{ pokemon: number }>();
const router = useRouter();

function handleSelection() {
  selectColor(color.value);
  localStorage.setItem("color", color.value);
  router.push("/home");
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.selectionBallWrapper {
  display: flex;
  height: 202px;
  align-items: center;
  justify-content: space-around;
  margin: 30px;
}
.ballsWrapper {
  display: flex;
  justify-content: center;
}
.selectorWrapper {
  display: flex;
  align-items: center;
}
.selectorContent {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background: v-bind(rgb);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-content: center;
  justify-content: center;
}

.selectorContent img {
  width: 80%;
  object-fit: contain;
}

.arrow-down {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid v-bind(rgb);
}
</style>
