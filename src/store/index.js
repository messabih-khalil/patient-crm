import { createStore } from "vuex";
import client from "./clients/client";
import clientDetail from "./clientDetails/clientDetail";
import popupUpData from "./clientDetails/popupUpData";
import clientData from "./clients/clientData";
export default createStore({
  modules: {
    clientsStore: client,
    clientDetailStore: clientDetail,
    popupUpDataStore: popupUpData,
    clientDataStore: clientData,
  },
});
