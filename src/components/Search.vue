<template>
  <div class="search">
    <input type="text" placeholder="Search ..." />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/global.scss";

.search {
  width: 100%;
  margin: 1rem 0;
  input {
    width: 100%;
    padding: $space-1 $space-2;
    font-size: 18px;
    background-color: $colorFive;
    border: 1px solid rgb(199, 199, 199);
    border-radius: 10px;
    height: 50px;
  }
}
</style>
