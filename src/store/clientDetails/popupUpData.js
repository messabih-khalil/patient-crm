export default {
  namespaced: true,
  state: {
    aptData: {},
  },
  getters: {
    getAptData: state => {
      return state.aptData;
    },
  },
  mutations: {
    SET_APT_DATA: (state, payload) => {
      state.aptData = payload;
    },
  },
  actions: {
    changeAptDataAction: (context, payload) => {
      context.commit("SET_APT_DATA", payload);
    },
  },
};
