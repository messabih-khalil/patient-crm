<script setup>
// ** imports
import avatar from "../assets/images/avatar.png";
</script>

<template>
  <a class="tile" href="#">
    <div class="name-image">
      <!-- image -->
      <img :src="avatar" alt="" />
      <!-- name -->
      <span>Messabih khalil</span>
    </div>

    <p class="phone">0785963652</p>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
      />
    </svg>
  </a>
</template>

<style lang="scss" scoped>
@import "../assets/scss/global.scss";

.tile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $colorFive;
  padding: $space-2;
  font-weight: 600;
  margin-top: $space-2;
  margin-right: 1rem;
  color: $fontColor;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  .name-image {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      margin-right: 1rem;
    }
  }
}
</style>
