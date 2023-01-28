<script setup>
// ** imports

const props = defineProps({
  inputType: {
    type: String,
  },
});
</script>

<template>
  <div>
    <input :type="inputType" placeholder="search ..." />
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/global.scss";

input {
  padding: $space-2;
  width: 300px;
  background-color: $colorFive;
  border: 1px solid rgb(211, 211, 211);
  font-size: 17px;
  margin-right: 1rem;
  border-radius: 10px;
  height: 60px;
}
</style>
