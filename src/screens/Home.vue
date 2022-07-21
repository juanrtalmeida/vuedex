<template>
  <div class="container">
    <Transition name="slide">
      <div class="textWrapper">
        <h1>Gotta know them all</h1>
        <p>Your friend database for pokemons stats and locations</p>
      </div>
    </Transition>
    <div class="image">
      <img
        v-if="selectedColor === 'blue'"
        src="../assets/245.png"
        alt="Home page image"
      />
      <img
        v-if="selectedColor === 'green'"
        src="../assets/251.png"
        alt="Home page image"
      />
      <img
        v-if="selectedColor === 'red'"
        src="../assets/ninetails.png"
        alt="Home page image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useColors } from "../hooks/useColors";
const { header, homeGradient, selectedColor } = useColors();
const router = useRouter();
onMounted(() => {
  switch (localStorage.getItem("color")) {
    case "red":
      break;
    case "green":
      break;
    case "blue":
      break;
    default:
      router.push("/");
      break;
  }
});
</script>

<style scoped>
.v-leave-active,
.v-enter-active {
  transition: 1s;
}
.v-enter {
  transform: translate(100%, 0);
}
.v-leave-to {
  transform: translate(-100%, 0);
}

.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
}

h1,
p {
  color: v-bind(header);
}
.textWrapper {
  padding-left: 150px;
}
.textWrapper h1 {
  font-family: "Poppins";
  font-weight: 700;
  font-size: 78px;
}
.textWrapper p {
  font-family: "Poppins";
  font-weight: 300;
}
.image {
  display: flex;
  align-items: center;
  background: v-bind(homeGradient);
  box-shadow: -27px 27px 53px #9e9e9e, 27px -27px 53px #ffffff;
  width: 40%;
  height: 400px;
  border-radius: 50px 0 0 50px;
}

.image img {
  height: 140%;
}
</style>
