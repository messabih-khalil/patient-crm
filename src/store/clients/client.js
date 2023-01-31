const { ipcRenderer } = require("electron");

export default {
  namespaced: true,
  state: {
    clients: [
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
    ],
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

    PUSH_CLIENT: (state, payload) => {},
  },
  actions: {
    // get clients
    getClientsAction: (context, payload) => {
      // ipcRenderer.invoke('createClient' , "hi")
      context.commit("SET_CLIENTS", payload);
    },

    // add client
    addClientAction: async (context, payload) => {
      // send data to ipc main
      const result = await ipcRenderer.invoke("createClient", payload);
      console.log(result);
      // context.commit("PUSH_CLIENT", result);
    },
  },
};
