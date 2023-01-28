<template>
  <div class="header">
    <p>historique des clients</p>
    <span>Cabinet Dentaire</span>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/global.scss";

.header {
  padding: $space-6 $space-5;
  background-color: $colorThree;
  p {
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: $fontColor;
  }

  span {
    color: grey;
    font-size: $text-m;
  }
}
</style>
