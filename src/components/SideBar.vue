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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M3 10H2V4.003C2 3.449 2.455 3 2.992 3h18.016A.99.99 0 0 1 22 4.003V10h-1v10.001a.996.996 0 0 1-.993.999H3.993A.996.996 0 0 1 3 20.001V10zm16 0H5v9h14v-9zM4 5v3h16V5H4zm5 7h6v2H9v-2z"
          />
        </svg>
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
