<script setup>
// ** imports
import Head from "./Head.vue";
import Table from "./Table.vue";
import Input from "./Input.vue";
</script>

<template>
  <div>
    <Head />
    <!-- actions -->

    <!-- table -->
    <div class="table-actions">
      <!-- actions -->
      <Input type="text" />
      <Input type="date" />
      <Table />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/global.scss";

div {
  //   background-color: red;
  flex-grow: 1;
  .table-actions {
    padding: $space-2;
  }
}
</style>
