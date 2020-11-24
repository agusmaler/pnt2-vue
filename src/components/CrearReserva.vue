<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onAgregar" @reset="onLimpiar" class="q-gutter-md">

      <q-input
        filled
        v-model="nombre"
        label="Nombre"
        hint="Nombre del Paciente"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Ingrese un nombre']"
      />

         <q-select ref="sala" v-model="sala" label="sala" filled clearable
                :options="salas" :dense="true"
              >
                <template v-slot:option="scope">
                  <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                    <q-item-section avatar>
                      <q-icon :name="scope.opt.icon" :color="scope.opt.color"/>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label v-html="scope.opt.label" />
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>


       <q-input ref="fecha" filled v-model="fecha" label="Fecha" :dense="true"
                :rules="[ val => val && val.length > 0 || 'El campo es obligatorio']"
              >

              <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="fecha" mask="YYYY-MM-DD">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="cerrar" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>

      
        <q-input ref="horario" filled v-model="horario" label="Horario" :dense="true"
                :rules="[ val => val && val.length > 0 || 'El campo es obligatorio']"
              >
                <template v-slot:append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-time v-model="horario" mask="HH:mm" format24h>
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="cerrar" color="primary" flat />
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
     

      <div>
        <q-btn label="Guardar" type="submit" color="primary" />
        <q-btn
          label="Reiniciar"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<style></style>

<script>
import {AGREGAR_RESERVA, SUMAR_SALA_UNO, SUMAR_SALA_DOS, SUMAR_SALA_TRES} from '../store/reservas/types'
export default {
  name: "crearReserva",
  data(){
    return {
      nombre: null,
      sala: null,
      fecha: null,
      horario: null,

       salas: [
        {
          label: 'Chica',
          value: '1',
          icon: 'library_music',
          color: 'black'
        },
        {
          label: 'Mediana',
          value: '2',
          icon: 'library_music',
          color: 'black'
        },
        {
          label: 'Grande',
          value: '3',
          icon: 'library_music',
          color: 'black'
        },

      ],
    }
  },

  methods: {
    onAgregar: function (){
      let reserva = {
        nombre: this.nombre,
        fecha: this.fecha,
        horario: this.horario,
        sala: this.sala
      }
        if (reserva.sala.value === '1') this.$store.dispatch('reservas/' + SUMAR_SALA_UNO)
        if (reserva.sala.value === '2') this.$store.dispatch('reservas/' + SUMAR_SALA_DOS)
        if (reserva.sala.value === '3') this.$store.dispatch('reservas/' + SUMAR_SALA_TRES)
      this.$store.dispatch('reservas/' + AGREGAR_RESERVA, reserva)
 
    },
    onLimpiar: function (){
      this.nombre= "",
      this.sala="",
      this.fecha= "",
      this.hora= ""
    }
  }
};
</script>