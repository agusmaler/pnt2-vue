import Vue from "vue";
import Vuex from "vuex";
import reservas from "../store/reservas";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    reservas,
  },
})


