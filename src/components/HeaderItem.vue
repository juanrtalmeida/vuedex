<template>
  <p>{{ props.item }}</p>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

const props = defineProps<{
  item: string;
}>();

const itemName = ref(props.item);
</script>

<style scoped>
p {
  margin: 0;
  padding: 10px 20px;

  border-radius: 10px;
  transition: all 0.6s ease-in;
}

p:hover {
  background-color: blueviolet;
}
</style>
