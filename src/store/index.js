import { createStore } from "vuex";
import client from "./clients/client";
import clientDetail from "./clientDetails/clientDetail";
export default createStore({
  modules: {
    clientsStore: client,
    clientDetailStore: clientDetail,
  },
});
