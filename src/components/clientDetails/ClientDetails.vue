<script setup>
// ** imports
import Head from "./Head.vue";
import Table from "./Table.vue";
import Input from "./Input.vue";
import AddButton from "./AddButton.vue";
import ClientDetailsPopup from "../popups/ClientDetailsPopup.vue";
import { ref } from "vue";

const showPopup = ref(false);
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
        <AddButton @showPopupEmiter="showPopup = !showPopup" />
      </div>

      <!-- table -->
      <Table />
    </div>

    <!-- popup -->
    <ClientDetailsPopup
      :showPopup="showPopup"
      @closePopupEmiter="showPopup = !showPopup"
    />
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
