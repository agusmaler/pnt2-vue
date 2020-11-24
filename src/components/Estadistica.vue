<template>
  <div style="width:500px">
    <q-list bordered separator>
      <div id="app">
        <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
      </div>
    </q-list>
  </div>
</template>

<script>
import PieChart from "../PieChart";

export default {
  components: {
    PieChart
  },
  name: "Reserva",
  data() {
    return {
      salaUno: Number,
      salaDos: Number,
      salaTres: Number,

      chartOptions: {
        hoverBorderWidth: 20
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Sala Uno", "Sala Dos", "Sala Tres"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [this.getSalaUno(), this.getSalaDos(), this.getSalaTres()]
          }
        ]
      }
    };
  },
  methods: {
    getSalaUno() {
      return (this.salaUno = this.$store.state.reservas.cantidadSalaUno);
    },
    getSalaDos() {
      return (this.salaDos = this.$store.state.reservas.cantidadSalaDos);
    },
    getSalaTres() {
      return (this.salaTres = this.$store.state.reservas.cantidadSalaTres);
    }
  },

  mounted: function() {
    this.salaUno = this.$store.state.reservas.cantidadSalaUno;
    this.salaDos = this.$store.state.reservas.cantidadSalaDos;
    this.salaTres = this.$store.state.reservas.cantidadSalaTres;
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
