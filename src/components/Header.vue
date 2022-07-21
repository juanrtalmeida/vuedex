<template>
  <div :class="active ? 'headerWrapper' : 'headerWrapperInactive'">
    <Transition mode="out-in">
      <ul v-if="active" class="listContainer">
        <div class="listItems">
          <HeaderItem item="Home" />
          <HeaderItem item="Map" />
          <HeaderItem item="Pokedex" />
        </div>
        <img
          class="logo"
          @click="activeMenu"
          src="../assets/logo-removebg-preview.png"
          alt="Poke app made by yukito"
          title="Poke app made by yukito"
        />
        <div class="listItems">
          <HeaderItem item="Search" />
          <HeaderItem item="Login" />
          <ModeToggle />
        </div>
      </ul>
      <div v-else class="headerWrapperDouble">
        <img
          class="logo"
          src="../assets/logo-removebg-preview.png"
          alt="Poke app made by yukito"
          title="Poke app made by yukito"
        />
        <MenuIcon @click="activeMenu" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { MenuIcon, HeaderItem, ModeToggle } from "./";
const active = ref(false);

function activeMenu() {
  active.value = !active.value;
}
</script>

<style scoped>
.v-enter-active {
  transition: opacity 0.6s ease;
}
.v-leave-active {
  transition: opacity 0.6s ease;
}

.v-enter-from {
  opacity: 0;
}
.v-leave-to {
  opacity: 0;
}
.selectionBallWrapper {
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
}

* {
  font-family: "Poppins";
}
ul {
  padding: 0;
}
.logo {
  width: 70px;
  height: 70px;
  cursor: pointer;
}

.menu {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.headerWrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
}

.headerWrapperDouble {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  max-width: 1440px;
}

.headerWrapperInactive {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0px auto;
  padding: 16px 0;
  max-width: 1440px;
  color: aliceblue;
}

.listContainer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.listItems {
  height: 100%;
  display: flex;
  flex-basis: 33%;
  justify-content: space-around;
  align-items: center;
}
</style>
