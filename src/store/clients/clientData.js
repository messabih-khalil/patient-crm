export default {
  namespaced: true,
  state: {
    cleintData: {},
    showUpdatePopup: false,
  },
  getters: {
    getClientData: state => {
      return state.cleintData;
    },

    getPopupStatus: state => {
      return state.showUpdatePopup;
    },
  },
  mutations: {
    SET_CLIENT_DATA: (state, payload) => {
      state.cleintData = payload;
    },

    SET_POPUP_STATE: (state, payload) => {
      state.showUpdatePopup = !state.showUpdatePopup;
    },
  },
  actions: {
    changeClientDataAction: (context, payload) => {
      context.commit("SET_CLIENT_DATA", payload);
    },

    togglePopup: (context, payload) => {
      context.commit("SET_POPUP_STATE", payload);
    },
  },
};
