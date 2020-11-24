<template>

  <div class="q-pa-xl">
    
    <div class="q-gutter-y-md" style="max-width: 400">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="black"
          align="center"
          narrow-indicator
        >
          <q-tab name="Reservar Sala" icon= "music_note" label="Reservar Sala" />
          <q-tab name="Listado de Turnos" icon= "info" label="Listado de Turnos"/>
          <q-tab name="Estadisticas" icon= "show_chart" label="Calendario"  />
        </q-tabs>

        <q-separator />
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Reservar Sala" align="center">
            <div class="text-h6">Sacar Turno</div>
            <CrearReserva />
          </q-tab-panel>

               <q-tab-panel name="Listado de Turnos" align="center">
            <div class="text-h6">Listado de Turnos</div>
            <ListadoReservas />
          </q-tab-panel>

          <q-tab-panel name="Estadisticas" align="center">
            <div class="text-h6">Estadisticas</div>
         <Estadistica />
          </q-tab-panel>

  
        </q-tab-panels>
      </q-card>

    </div>
  </div>
</template>

<script>

import CrearReserva from '../components/CrearReserva'
import ListadoReservas from '../components/ListadoReservas'
import Estadistica from '../components/Estadistica'




export default {
  name: 'PageIndex',
  components: {
    CrearReserva,
    ListadoReservas,
    Estadistica,
 
  },
  data () {
    return {
      tab: 'Reservas de Salas'
    }
  }
}
</script>
