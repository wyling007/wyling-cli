import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'auth',
      //   paths: ['token'],
    }),
  ],
  strict: true,
  state: (): {
    token: string | undefined;
    test: string;
  } => ({
    token: undefined,
    test: '123',
  }),
  mutations: {
    setToken: (state) => (state.token = '88888'),
    setTest: (state) => (state.test = '88888'),
  },
  actions: {
    setToken: ({ state, commit }) => (state.token = '77777'),
  },
});
