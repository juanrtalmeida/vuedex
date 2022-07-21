<template>
  <div class="container" v-on:mouseenter="colorChange">
    <div>
      <div :class="`dot ${colors.control[0] ? 'dotRed' : 'dotDefault'}`"></div>
      <div :class="`dot ${colors.control[1] ? 'dotBlue' : 'dotDefault'}`"></div>
      <div :class="`dot ${colors.control[2] ? 'dotBlue' : 'dotDefault'}`"></div>
    </div>
    <div>
      <div
        :class="`dot ${colors.control[3] ? 'dotGreen' : 'dotDefault'}`"
      ></div>
      <div :class="`dot ${colors.control[4] ? 'dotRed' : 'dotDefault'}`"></div>
      <div :class="`dot ${colors.control[5] ? 'dotBlue' : 'dotDefault'}`"></div>
    </div>
    <div>
      <div
        :class="`dot ${colors.control[6] ? 'dotGreen' : 'dotDefault'}`"
      ></div>
      <div
        :class="`dot ${colors.control[7] ? 'dotGreen' : 'dotDefault'}`"
      ></div>
      <div :class="`dot ${colors.control[8] ? 'dotRed' : 'dotDefault'}`"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "@vue/reactivity";
import { useColorMode } from "../hooks/useColorMode";

const { selectedTheme } = useColorMode();
const colors = reactive({
  control: [false, false, false, false, false, false, false, false, false],
  counter: 0,
});
function colorChange() {
  colors.counter++;
  if (colors.counter > 9) {
    colors.control = colors.control.map((item) => false);
    colors.counter = 0;
    return;
  }
  colors.control[colors.counter - 1] = true;
}

const theme = ref(
  selectedTheme.value ? "rgb(236, 235, 235)" : "rgb(83, 82, 82)"
);
</script>

<style scoped>
.container {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;
}
.dot {
  margin: 2px 1px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  transition: all 0.6s ease;
}

.dotDefault {
  background-color: v-bind(theme);
}

.dotRed {
  background-color: rgb(210, 27, 3);
}

.dotBlue {
  background-color: rgb(3, 113, 210);
}

.dotGreen {
  background-color: rgb(3, 210, 37);
}
</style>
