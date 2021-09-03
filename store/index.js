export const state = () => ({
  ready: false,
  busy: false,
  user: null,
  token: null,
});


export const mutations = {
  setUser( state, user ) {
    state.user = user;
  },
  unsetUser(state) {
    state.user = null;
  }
};

export const actions = {};

