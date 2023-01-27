<script setup>
// ** imports
import Header from "../components/Header.vue";
import ClientList from "../components/ClientList.vue";
</script>

<template>
  <div class="client-comp">
    <!-- client header -->
    <Header />

    <!-- Clien list -->
    <ClientList />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/global.scss";

.client-comp {
  width: 500px;
  height: 100vh;
  background-color: $colorTwo;
}
</style>
