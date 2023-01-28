<script setup>
// ** change popup status

const emit = defineEmits(["showPopupEmiter"]);

const togglePopup = () => {
  emit("showPopupEmiter");
};


</script>

<template>
  <button @click.prevent="togglePopup"><span>+</span></button>
</template>

<style lang="scss" scoped>
@import "../assets/scss/global.scss";

button {
  padding: 0;
  height: 35px;
  width: 35px;
  border-radius: 100px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  background-color: $colorOne;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
