import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    isPositive: (state: any) => {
      return state.count > 0;
    },
    isNegative: (state: any) => {
      return state.count < 0;
    },
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
    decrement(state: any) {
      state.count--;
    },
    add(state: any, amount: number) {
      state.count += amount;
    },
    sub(state: any, amount: number) {
      state.count -= amount;
    }
  },
  actions: {
    addAsync({ commit }, payload: number) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("add", payload);
          resolve();
        }, 1000);
      })
    },
    subAsync({ commit }, payload: number) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("sub", payload);
          resolve();
        }, 1000);
      })
    },
  }
});
