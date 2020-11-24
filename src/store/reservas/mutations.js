import * as types from "./types";

export default {
  [types.AGREGAR_RESERVA]: function(state, data) {
    state.reservas.push(data);
    console.log(state)
  },

  [types.SUMAR_SALA_UNO]: function (state) {
    state.cantidadSalaUno += 1
  },
  [types.SUMAR_SALA_DOS]: function (state) {
    state.cantidadSalaDos += 1
  },

  [types.SUMAR_SALA_TRES]: function (state) {
    state.cantidadSalaTres += 1
  },


  [types.SELECCIONAR_RESERVA]: function(state) {
    state.reservaSeleccionada = data;
    console.log(state)
  },

};
