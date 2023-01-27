<template>
  <!-- sidebar -->
  <SideBar />
  <!-- app -->
  <div class="mainApp">
    <router-view />
  </div>
</template>

<script setup>
// ** imports
import SideBar from "./components/SideBar.vue";

// **
import { ref } from "vue";

const name = ref("alaa");
</script>

<style lang="scss">
@import "./assets/scss/global.scss";

.mainApp {
  margin-left: $sidebarWidth;
}
</style>
