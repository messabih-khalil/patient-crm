export default {
  namespaced: true,
  state: {
    client: {},
    clientDetails: [
      {
        client_id: 1,
        id: 1,
        date: "22-01-2023",
        description: "lorem ipsum jojdi huyeh j klipo",
        cout: 7000,
        versement: 4000,
        rest: 3000,
      },
      {
        client_id: 1,
        id: 2,
        date: "22-02-2023",
        description: "lorem ipsum jojdi huyeh j klipo",
        cout: 7000,
        versement: 7000,
        rest: 0,
      },
      {
        client_id: 2,
        id: 3,
        date: "22-03-2023",
        description: "lorem ipsum jojdi huyeh j klipo",
        cout: 7000,
        versement: 7000,
        rest: 0,
      },
    ],
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
    // get clients
    getClientDetailsAction: (context, payload) => {
      // get client deatails from backend with id

      // save changes
      context.commit("SET_CLIENT_DETAILS", payload);
    },

    // set client info
    setClientAction: ({ commit, dispatch }, payload) => {
      // call getClientDetailsAction
      dispatch("getClientDetailsAction", payload);
      commit("SET_CLIENT_INFO", payload);
    },
  },
};
