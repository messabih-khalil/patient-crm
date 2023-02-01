<script>
// ** imports

import { mapGetters, mapActions } from "vuex";

export default {
  // computed
  computed: {
    ...mapGetters({ client: "clientDetailStore/getClient" }),
  },

  methods: {
    ...mapActions("clientDataStore", ["changeClientDataAction", "togglePopup"]),
    ...mapActions("clientDetailStore", ["updateClientInfo"]),
    ...mapActions("clientsStore", ["removeClientAction"]),

    // change client data in store

    updateClientData() {
      this.togglePopup();
    },

    // delete client

    async deleteClient() {
      await this.removeClientAction(this.client.id);
      this.updateClientInfo({});
    },
  },
};
</script>

<template>
  <div class="header">
    <div class="info">
      <img src="../../assets/images/avatar.png" alt="" />
      <div>
        <p>{{ client.name }}</p>
        <span>{{ client.phone }}</span>
      </div>
    </div>
    <div class="actions">
      <button @click.prevent="updateClientData()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"
          />
        </svg>
      </button>
      <button @click.prevent="deleteClient()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-4.586 6l1.768 1.768-1.414 1.414L12 15.414l-1.768 1.768-1.414-1.414L10.586 14l-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14zM9 4v2h6V4H9z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/global.scss";

.header {
  padding: $space-6 $space-5;
  // background-color: $colorFive;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .info {
    display: flex;
    align-items: center;
    img {
      width: 80px;
      margin-right: 2rem;
    }
    div {
      p {
        text-transform: capitalize;
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: $fontColor;
      }

      span {
        color: grey;
        font-size: $text-m;
      }
    }
  }
}
.actions {
  display: flex;
  align-items: center;
  flex-direction: column;
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 10px;
    margin-left: 0.5rem;

    &:first-child {
      background-color: greenyellow;
      margin-bottom: 0.5rem;
    }

    &:nth-child(2) {
      background-color: rgb(252, 134, 134);
    }
  }
}
</style>
