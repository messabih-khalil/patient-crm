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
  width: 600px;
  height: 100vh;
  // background-color: $colorTwo;
  border-right: 1px solid rgb(216, 216, 216);
}
</style>
