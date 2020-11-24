<template>
  <div class="q-pa-md q-gutter-md">

    <q-list bordered class="rounded-borders" style="max-width: 350px">
      <q-item
        clickable
        v-ripple
        v-for="reservas in listadoReservas"
        :key="reservas.nombre"
      >
        <q-item-section avatar>
          <q-avatar>
            <span class="material-icons"> person </span>
          </q-avatar>
        </q-item-section>

        
        <q-item-section>
          <q-item-label lines="1" class="text-weight-bold text-uppercase">{{
            reservas.nombre
          }}</q-item-label>
           <q-item-label caption lines="2">
            Fecha: {{ reservas.fecha }}
          </q-item-label>
              <q-item-label caption lines="2">
            Hora:
            {{ reservas.horario }}
          </q-item-label>
          <q-item-label caption lines="2"> </q-item-label>
        </q-item-section>

       
        <q-item-section side top>
          Sala {{ reservas.sala.label }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: "Reserva",
  data() {
    return {
      listadoReservas: [],
    };
  },
  mounted: function () {
    this.listadoReservas = this.$store.state.reservas.reservas;
  },
};
</script>
