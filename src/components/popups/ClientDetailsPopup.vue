<script>
// ** imports

import { mapActions, mapGetters } from "vuex";

// **
export default {
  data() {
    return {
      created_at: "",
      description: "",
      price: 0,
      paid: 0,
    };
  },
  computed: {
    ...mapGetters({ client_id: "clientDetailStore/getClientId" }),
  },
  props: {
    showPopup: {
      type: Boolean,
    },
  },
  methods: {
    ...mapActions("clientDetailStore", ["createAptAction"]),
    closePopup() {
      this.$emit("closePopupEmiter");
    },
    addNewApt() {
      // console.log(this.apt);
      this.createAptAction({
        description: this.description,
        price: this.price,
        paid: this.paid,
        created_at: this.created_at,
        client_id: this.client_id,
      });
    },
  },
};
</script>

<template>
  <div class="popup" v-if="showPopup">
    <div class="popup-box">
      <p class="title">Nouvelle Act</p>
      <label for="">Date</label>
      <input type="date" name="" v-model="created_at" />
      <label for="">Act</label>
      <textarea rows="5" cols="" v-model="description"></textarea>
      <label for="">Cout</label>
      <input type="number" name="" v-model="price" />
      <label for="">Versement</label>
      <input type="number" name="" v-model="paid" />
      <!-- actions -->

      <div class="actions">
        <button @click="addNewApt">Envoyer</button>
        <button @click="closePopup">Fermer</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  height: 100vh;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgba(187, 187, 187, 0.493);
  display: flex;
  align-items: center;
  justify-content: center;
  .popup-box {
    background-color: white;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    width: 700px;
    border-radius: 10px;
    .title {
      text-align: center;
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 2rem;
    }
    label {
      font-size: 18px;
      margin-top: 1rem;
    }
    input,
    textarea {
      padding: 1rem;
      font-size: 17px;
      border-radius: 10px;
      border: 1px solid grey;
      margin-top: 1rem;
    }

    .actions {
      margin-top: 1.5rem;
      button {
        padding: 0.7rem 1rem;
        font-weight: 600;
        width: 110px;
        border-radius: 7px;
        border: none;
        margin-right: 1rem;
        &:first-child {
          background-color: greenyellow;
        }

        &:nth-child(2) {
          background-color: rgb(252, 134, 134);
        }
      }
    }
  }
}
</style>
