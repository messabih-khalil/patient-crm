<script>
// ** imports

import AddButton from "./AddButton.vue";
import Search from "./Search.vue";
import Tile from "../components/Tile.vue";
import ClientPopupVue from "@/components/popups/ClientPopup.vue";
import UpdateClientData from "@/components/popups/UpdateClientData.vue";
import { mapGetters, mapActions } from "vuex";

// ****
export default {
  data() {
    return {
      showPopup: false,
      showUpdatePopup: false,
      clientsList: [],
    };
  },

  // components

  components: {
    AddButton,
    Search,
    Tile,
    ClientPopupVue,
    UpdateClientData,
  },

  // computed

  computed: {
    ...mapGetters({ clients: "clientsStore/getAllClients" }),
    ...mapGetters({ getFilteredClients: "clientsStore/getFilteredClients" }),
  },

  watch: {
    clients: function (newVal, oldVal) {
      this.clientsList = newVal;
    },
  },

  // methods

  methods: {
    ...mapActions("clientsStore", ["getClientsAction"]),
    filterClients(value) {
      if (value) {
        this.clientsList = this.getFilteredClients(value);
      } else {
        this.clientsList = this.clients;
      }
    },
  },

  // Hooks

  async created() {
    await this.getClientsAction();
    this.clientsList = this.clients;
  },
};
</script>

<template>
  <div class="clients-list">
    <div class="head">
      <p>Clientes</p>
      <!-- actions -->
      <div class="actions">
        <AddButton @showPopupEmiter="showPopup = !showPopup" />
      </div>
    </div>
    <!-- search -->
    <Search @searchData="value => filterClients(value)" />
    <!-- tile -->
    <div class="tailes">
      <Tile v-for="(item, _) in clientsList" :key="item.id" :client="item" />
    </div>

    <!-- popup -->
    <ClientPopupVue
      :showPopup="showPopup"
      @closePopupEmiter="showPopup = !showPopup"
    />

    <UpdateClientData />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/global.scss";

.clients-list {
  padding: $space-6 $space-5;
  position: relative;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      text-transform: uppercase;
      font-weight: 600;
    }
  }

  .tailes {
    overflow-y: scroll;
    height: 60vh;
  }
}
</style>
