<script setup>
// ** imports
import { ref } from "vue";

// **
const props = defineProps(["showPopup"]);

const emit = defineEmits(["closePopupEmiter"]);

const closePopup = () => {
  emit("closePopupEmiter");
};
</script>

<template>
  <div class="popup" v-if="showPopup">
    <div class="popup-box">
      <p class="title">Nouvelle cliente</p>
      <label for="">Nom & Prenom</label>
      <input type="" name="" value="" placeholder="Nom & Prenom ..." />
      <label for="">Numéro de Téléphone</label>
      <input type="" name="" value="" placeholder="Numéro de Téléphone" />

      <!-- actions -->

      <div class="actions">
        <button>Envoyer</button>
        <button @click="closePopup">Fermer</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  height: 100%;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  background-color: white;
  .popup-box {
    background-color: white;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
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
    input {
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
