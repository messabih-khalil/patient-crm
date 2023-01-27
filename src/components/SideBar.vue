<script setup>
//  ** imports
import clientImage from "../assets/images/client.png";
</script>

<template>
  <nav>
    <!-- logo -->
    <div class="logo">LG</div>
    <!-- items -->
    <div class="items">
      <a href="">
        <img :src="clientImage" alt="" />
      </a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../assets/scss/global.scss";

nav {
  width: $sidebarWidth;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $colorOne;

  .logo {
    padding: $space-3;
    text-align: center;
    font-weight: 900;
    font-size: $text-xl;
    color: white;
  }

  .items {
    padding: $space-2 $space-3;
    display: flex;
    background-color: $colorFive;
    display: flex;
    align-items: center;
    justify-content: center;
    a img {
      width: 40px;
    }
  }
}
</style>
