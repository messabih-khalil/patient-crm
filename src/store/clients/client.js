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
    // remove client

    REMOVE_CLIENT: (state, payload) => {
      state.clients = state.clients.filter(el => el.id != payload);
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

    // update client
    updateClientAction: async (context, payload) => {
      // send data to ipc main
      const result = await ipcRenderer.invoke("updateClient", payload);

      context.commit("REMOVE_CLIENT", result.id);
      context.commit("PUSH_CLIENT", result);

      return result;
    },

    // remove client

    removeClientAction: async (context, payload) => {
      const result = await ipcRenderer.invoke("deleteClient", payload);
      context.commit("REMOVE_CLIENT", payload);
    },
  },
};
