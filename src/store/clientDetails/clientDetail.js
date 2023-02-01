const { ipcRenderer } = require("electron");

export default {
  namespaced: true,
  state: {
    client: {},
    clientDetails: [],
  },
  getters: {
    // get all client details
    getClientDetails: state => {
      return state.clientDetails;
    },
    getClient: state => {
      return state.client;
    },
    // filter clients

    getfilteredByDate: state => search => {
      return state.clients.filter(el => el.date.includes(search));
    },

    // get client id

    getClientId: state => {
      return state.client.id;
    },
  },
  mutations: {
    SET_CLIENT_DETAILS: (state, payload) => {
      state.clientDetails = payload;
    },

    SET_CLIENT_INFO: (state, payload) => {
      state.client = payload;
    },

    SET_NEW_APT: (state, payload) => {
      state.clientDetails.unshift(payload);
    },

    DELETE_APT: (state, payload) => {
      state.clientDetails = state.clientDetails.filter(el => el.id != payload);
    },
  },
  actions: {
    getClientapt: async ({ commit, dispatch }, payload) => {
      const result = await ipcRenderer.invoke("getAllApt", payload);
      // set client appt

      commit("SET_CLIENT_DETAILS", result);
    },

    // get clients
    getClientDetailsAction: ({ commit, dispatch }, payload) => {
      // set client
      commit("SET_CLIENT_INFO", payload);
      // get client apt from backend with id
      dispatch("getClientapt", payload.id);
    },

    // set client info
    setClientAction: ({ commit, dispatch }, payload) => {
      // call getClientDetailsAction
      dispatch("getClientDetailsAction", payload);
      commit("SET_CLIENT_INFO", payload);
    },

    // set client info after updated
    updateClientInfo: ({ commit, dispatch }, payload) => {
      commit("SET_CLIENT_INFO", payload);
    },

    // set new apt

    createAptAction: async ({ commit, dispatch }, payload) => {
      const result = await ipcRenderer.invoke("addApt", payload);
      commit("SET_NEW_APT", result[0]);
    },

    // delete apt

    deleteApt: async ({ commit, dispatch }, payload) => {
      const result = await ipcRenderer.invoke("deleteApt", payload);

      commit("DELETE_APT", payload);
    },

    updateAptAction: async ({ commit }, payload) => {
      const result = await ipcRenderer.invoke("updateApt", payload);

      commit("DELETE_APT", result.id);
      commit("SET_NEW_APT", result);
    },
  },
};
