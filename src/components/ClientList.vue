<script>
// ** imports

import AddButton from "./AddButton.vue";
import Search from "./Search.vue";
import Tile from "../components/Tile.vue";
import ClientPopupVue from "@/components/popups/ClientPopup.vue";
import { mapGetters, mapActions } from "vuex";

// ****
export default {
  data() {
    return {
      showPopup: false,
      clientsList: [],
    };
  },

  // components

  components: {
    AddButton,
    Search,
    Tile,
    ClientPopupVue,
  },

  // computed

  computed: {
    ...mapGetters({ clients: "clientsStore/getAllClients" }),
    ...mapGetters({ getFilteredClients: "clientsStore/getFilteredClients" }),
  },
  // methods

  methods: {
    ...mapActions("clientsStore", ["getClientsAction"]),
    filterClients(value) {
      console.log(value);
      if (value) {
        this.clientsList = this.getFilteredClients(value);
      } else {
        this.clientsList = this.clients;
      }
    },
  },

  // Hooks

  created() {
    this.getClientsAction([
      {
        id: 1,
        name: "messabih khalil",
        phone: "01478525",
      },
      {
        id: 2,
        name: "messabih aldin",
        phone: "01478525",
      },
      {
        id: 3,
        name: "messabih mohamed",
        phone: "01478525",
      },
    ]);
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
      <Tile v-for="(item, _) in clientsList" :key="item.id" :client=item />
    </div>

    <!-- popup -->
    <ClientPopupVue
      :showPopup="showPopup"
      @closePopupEmiter="showPopup = !showPopup"
    />
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
