<script setup>
// ** imports

import Clients from "../components/Clients.vue";

import ClientDetails from "@/components/clientDetails/ClientDetails.vue";

import ClientPopupVue from "@/components/popups/ClientPopup.vue";
</script>

<template>
  <div class="main">
    <Clients />

    <ClientDetails />

   
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
}
</style>
