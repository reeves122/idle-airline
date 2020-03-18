import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    balance: 5,
    currentLevel: 1,
    revenueForNextLevel: 0,
    revenuePerMinute: 0,
    availablePlanes: [
      {
        id: 0,
        name: 'Plane 1',
        cost: 5,
        revenue: 1,
        flyTime: 1,
      },
      {
        id: 1,
        name: 'Plane 2',
        cost: 15,
        revenue: 2,
        flyTime: 3,
      },
      {
        id: 2,
        name: 'Plane 3',
        cost: 30,
        revenue: 3,
        flyTime: 5,
      },
    ],
    currentPlanes: [],
  },
  mutations: {
    gameLoop(state) {
      for (let i = 0; i < state.currentPlanes.length; i += 1) {
        const plane = state.currentPlanes[i];

        if (plane.departTime && !plane.arrivalTime) {
          state.currentPlanes[i].arrivalTime = plane.departTime + 1000 * plane.flyTime;
        }

        if (plane.arrivalTime) {
          if (Date.now() >= plane.arrivalTime) {
            state.currentPlanes[i].arrivalTime = null;
            state.currentPlanes[i].departTime = null;
            state.balance += plane.revenue;
          }
        }
      }
    },
    flyPlane(state, planeIndex) {
      state.currentPlanes[planeIndex].departTime = Date.now();
    },
    sellPlane(state, planeIndex) {
      state.balance += state.currentPlanes[planeIndex].cost * 0.50;
      state.currentPlanes.splice(planeIndex, 1);
    },
    buyPlane(state, index) {
      // Make a shallow copy of the object
      const plane = { ...state.availablePlanes[index] };

      // Buy the plane if we have the money
      if (state.balance >= plane.cost) {
        state.currentPlanes.push(plane);
        state.balance -= plane.cost;
      }
    },
    resetGame(state) {
      state.balance = 5;
      state.currentLevel = 1;
      state.currentPlanes = [];
    },
  },
  actions: {
  },
  modules: {
  },
});
