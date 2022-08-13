<template>
  <p>{{ props.item }}</p>
</template>

<script setup lang="ts">
import { useColorMode } from "../../hooks/useColorMode";

const { textColors } = useColorMode();

const props = defineProps<{
  item: string;
}>();
</script>

<style scoped>
p {
  margin: 0;
  padding: 10px 20px;
  color: v-bind(textColors);
  border-radius: 10px;
  transition: all 0.6s ease-in;
}

p:hover {
  background-color: blueviolet;
}
</style>
