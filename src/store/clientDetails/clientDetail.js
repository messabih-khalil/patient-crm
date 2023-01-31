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
  },
  mutations: {
    SET_CLIENT_DETAILS: (state, payload) => {
      state.clientDetails = payload;
    },

    SET_CLIENT_INFO: (state, payload) => {
      state.client = payload;
    },
  },
  actions: {
    getClientapt: async ({ commit, dispatch }, payload) => {
      console.log(payload);
      const result = await ipcRenderer.invoke("getAllApt", payload);
      console.log(result);
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
  },
};
