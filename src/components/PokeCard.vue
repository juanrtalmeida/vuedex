<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import { callApi } from "../hooks/baseApi";

type pokeInfo = {
  abilities: [];
  base_experience: number;
  forms: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_types: [];
  species: { background: ""; foreground: "" };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    back_shiny_female: string;
    other: {
      dream_world: { front_default: string; front_female: string };
      home: {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      "official-artwork": { front_default: string };
    };
  };
  stats: [];
  types: [
    { slot: number; type: { name: string; url: string } },
    { slot: number; type: { name: string; url: string } }
  ];
  weight: number;
};

type coloursType = {
  [key: string]: { background: string; foreground: string };
};

const colours: coloursType = {
  normal: {
    background: "#d4cdb9",
    foreground: "#afa485",
  },
  fire: {
    background: "#f1b265",
    foreground: "#e7692e",
  },
  water: { background: "#74ccf4", foreground: "#398fea" },
  electric: { background: "#fceb6f", foreground: "#f3c033" },
  grass: { background: "#a6e170", foreground: "#52b542" },
  ice: {
    background: "#69d4e7",
    foreground: "#b3fbf9",
  },
  fighting: { background: "#b66358", foreground: "#7f342f" },
  poison: { background: "#cb84cd", foreground: "#87429e" },
  ground: { background: "#d6c388", foreground: "#b7904b" },
  flying: { background: "#94b7f4", foreground: "#7aa0f2" },
  psychic: { background: "#f6a8b9", foreground: "#f25384" },
  bug: { background: "#a7b635", foreground: "#829a2a" },
  rock: { background: "#bba181", foreground: "#926746" },
  ghost: { background: "#a78acb", foreground: "#65549d" },
  dragon: { background: "#7a85e7", foreground: "#3c3bbb" },
  dark: { background: "#746361", foreground: "#b66358" },
  steel: { background: "#aca9be", foreground: "#928faa" },
  fairy: { background: "#fbc7f4", foreground: "#f88ae9" },
};

const infos = ref<pokeInfo>();
const props = defineProps<{
  pokemon: string;
}>();

const result: pokeInfo = await callApi(`pokemon/${props.pokemon}`);

const pokemonType =
  Object.keys(colours).find((name) => name === result.types[0].type.name) || "";

const pokemonSecondType =
  Object.keys(colours).find((name) => name === result.types[1]?.type.name) ||
  "";

const pokemonColor = colours[pokemonType].background;
const pokemonPrimaryForeground = colours[pokemonType].foreground;
const pokemonSecondaryForeground = pokemonSecondType
  ? colours[pokemonSecondType].foreground
  : "";

infos.value = { ...result };
</script>
<template>
  <div class="cardContainer">
    <img
      class="image"
      :src="infos?.sprites.other['official-artwork'].front_default"
      alt=""
    />
    <p class="name">{{ infos?.name }}, {{ infos?.weight }}</p>
    <div>
      <button class="button primaryType">{{ pokemonType }}</button>
      <button class="button secondType" v-if="pokemonSecondType !== ''">
        {{ pokemonSecondType }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.cardContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 100%;
  background-color: v-bind(pokemonColor);
  border-radius: 15px;
  position: relative;
}

.image {
  transform: translate(0, -10%);
  transform-origin: (0, -10%);
  width: 80%;
}

.name {
  position: relative;
}

.button {
  border: none;
}

.primaryType {
  background-color: v-bind(pokemonPrimaryForeground);
}

.secondType {
  background-color: v-bind(pokemonSecondaryForeground);
}
</style>
