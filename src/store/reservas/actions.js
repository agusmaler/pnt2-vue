import * as types from "./types";

export default {
  [types.AGREGAR_RESERVA]: function({ commit, state }, data) {
    commit(types.AGREGAR_RESERVA, data);
  },

  [types.SUMAR_SALA_UNO]: function({ commit, state }) {
    commit(types.SUMAR_SALA_UNO);
  },
  [types.SUMAR_SALA_DOS]: function({ commit, state }) {
    commit(types.SUMAR_SALA_DOS);
  },
  [types.SUMAR_SALA_TRES]: function({ commit, state }) {
    commit(types.SUMAR_SALA_TRES);
  },



  [types.SELECCIONAR_RESERVA]: function({ commit, state }, id) {
    commit(types.SELECCIONAR_RESERVA, id);
  },

  
};
