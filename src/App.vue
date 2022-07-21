<script setup lang="ts">
import { ref } from "@vue/reactivity";
import Header from "./components/Header.vue";
import { useColorMode } from "./hooks/useColorMode";
const { backgroundColors } = useColorMode();
</script>

<template>
  <div class="diver background">
    <Header />
    <router-view />
  </div>
</template>
<style scoped>
.diver {
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: all 0.4s;
}

.background {
  background-color: v-bind(backgroundColors);
}
</style>
