<script setup>
// ** change popup status

const emit = defineEmits(["showPopupEmiter"]);

const togglePopup = () => {
  emit("showPopupEmiter");
};
</script>

<template>
  <button @click.prevent="togglePopup"><span> Nouveau</span></button>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/global.scss";

button {
  padding: $space-4;
  height: 60px;
  border-radius: 10px;
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
