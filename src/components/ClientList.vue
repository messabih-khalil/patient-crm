<script setup>
// ** imports

import AddButton from "./AddButton.vue";
import Search from "./Search.vue";

import Tile from "../components/Tile.vue";
</script>

<template>
  <div class="clients-list">
    <div class="head">
      <p>Clientes</p>
      <!-- actions -->
      <div class="actions">
        <AddButton />
      </div>
    </div>
    <!-- search -->
    <Search />
    <!-- tile -->
    <div class="tailes">
      <Tile v-for="(item, _) in 100" :key="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/global.scss";

.clients-list {
  padding: $space-6 $space-5;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      text-transform: uppercase;
      font-weight: 600;
    }
  }

  .tailes {
    overflow-y: scroll;
    height: 60vh;
  }
}
</style>
