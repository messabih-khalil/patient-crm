const { ipcRenderer } = require("electron");

export default {
  namespaced: true,
  state: {
    clients: [],
  },
  getters: {
    // get all clients
    getAllClients: state => {
      return state.clients;
    },

    // filter clients

    getFilteredClients: state => search => {
      return state.clients.filter(
        el => el.name.includes(search) || el.phone.includes(search)
      );
    },
  },
  mutations: {
    SET_CLIENTS: (state, payload) => {
      state.clients = payload;
    },
    // push new client
    PUSH_CLIENT: (state, payload) => {
      state.clients.unshift(payload);
    },
  },
  actions: {
    // get clients
    getClientsAction: async (context, payload) => {
      const result = await ipcRenderer.invoke("getAllClients", "");
      context.commit("SET_CLIENTS", result);
    },

    // add client
    addClientAction: async (context, payload) => {
      // send data to ipc main
      const result = await ipcRenderer.invoke("createClient", payload);
      context.commit("PUSH_CLIENT", result);
    },
  },
};
