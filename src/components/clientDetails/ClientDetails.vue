<script setup>
// ** imports
import Head from "./Head.vue";
import Table from "./Table.vue";
import Input from "./Input.vue";
import AddButton from "./AddButton.vue";
</script>

<template>
  <div class="client-details">
    <Head />
    <!-- actions -->

    <div class="table">
      <!-- actions -->
      <div class="table-actions">
        <Input inputType="text" />
        <Input inputType="date" />
        <AddButton/>
      </div>

      <!-- table -->
      <Table />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/global.scss";

.client-details {
  //   background-color: red;
  flex-grow: 1;
  .table {
    padding: $space-2;

    .table-actions {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}
</style>
