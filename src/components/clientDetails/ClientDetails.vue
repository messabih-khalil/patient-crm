<script>
// ** imports
import Head from "./Head.vue";
import Table from "./Table.vue";
import Input from "./Input.vue";
import AddButton from "./AddButton.vue";
import ClientDetailsPopup from "../popups/ClientDetailsPopup.vue";
import UpdateAptPopup from "../popups/UpdateAptPopup.vue";
import { mapGetters } from "vuex";

// ****
export default {
  data() {
    return {
      showPopup: false,
      showUpdatePopup: false,
    };
  },

  computed: {
    ...mapGetters({ client: "clientDetailStore/getClient" }),
  },

  components: {
    Head,
    Table,
    Input,
    AddButton,
    ClientDetailsPopup,
    UpdateAptPopup,
  },
};
</script>

<template>
  <div class="client-details" v-if="Object.keys(client).length">
    <Head />
    <!-- actions -->

    <div class="table">
      <!-- actions -->
      <div class="table-actions">
        <AddButton @showPopupEmiter="showPopup = !showPopup" />
      </div>

      <!-- table -->
      <Table @showUpdatePopupEmiter="showUpdatePopup = !showUpdatePopup" />
    </div>

    <!-- popup -->
    <ClientDetailsPopup
      :showPopup="showPopup"
      @closePopupEmiter="showPopup = !showPopup"
    />

    <UpdateAptPopup
      :showUpdatePopup="showUpdatePopup"
      @closePopupEmiter="showUpdatePopup = !showUpdatePopup"
    />
  </div>

  <div class="none" v-else>
    <img src="../../assets/images/folder.png" alt="" />
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

.none {
  display: flex;
  height: 100vh;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  img {
    width: 300px;
    height: 300px;
    opacity: 0.1;
  }
}
</style>
