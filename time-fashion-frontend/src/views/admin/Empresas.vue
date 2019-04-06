<template>
  <v-app>
    <nav class="borde">
      <div class="tituloCuadro">
        <h2>Empresas</h2>
      </div>
      <v-card width="1045">
        <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Buscar"
          single-line
          hide-details
        >
        </v-text-field>
        </v-card-title>
        <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        >
        <template v-slot:items="props">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.nit }}</td>
          <td class="text-xs-left">{{ props.item.telefono }}</td>
          <td class="text-xs-left">{{ props.item.correo }}</td>
          <div class="botonEmpleados"><v-btn @click="empleados = true">Empleados</v-btn></div>
        </template>
        </v-data-table>
      </v-card>
      <v-dialog v-model="empleados" width="1085">
        <v-card>
          <v-card-text>
            <nav class="borde">
              <div class="tituloCuadro"><h2>Empleados</h2></div>
              <v-card width="1045">
                <v-card-title>
                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Buscar"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-card-title>
                <v-data-table
                  :headers="encabezados"
                  :items="contenido"
                  :search="search"
                >
                  <template v-slot:items="props">
                    <td class="text-xs-left">{{ props.item.name }}</td>
                    <td class="text-xs-left">{{ props.item.apellido }}</td>
                    <td class="text-xs-left">{{ props.item.correo }}</td>
                    <td class="text-xs-left">{{ props.item.direccion }}</td>
                    <td class="text-xs-left">{{ props.item.telefono }}</td>
                  </template>
                </v-data-table>
              </v-card>
            </nav>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div class="botonCerrar"><v-btn flat @click="empleados = false">Cerrar</v-btn></div>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
    </nav>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      empleados: false,
      search: '',
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'NIT', value: 'nit' },
        { text: 'Teléfono', value: 'telefono' },
        { text: 'Correo', value: 'correo' },
        { text: '' }
      ],
      desserts: [
        {
          name: 'Totto',
          nit: '87364502-1',
          telefono: '321564651',
          correo: 'jbfjhbue@erjg.com'
        }
      ],
      encabezados: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Apellido', value: 'apellido' },
        { text: 'Correo', value: 'correo' },
        { text: 'Dirección', value: 'direccion' },
        { text: 'Teléfono', value: 'telefono' }
      ],
      contenido: [
        {
          name: 'Errik',
          apellido: 'Marto',
          correo: 'asdasda@hola.com',
          direccion: 'asdasdasd123123',
          telefono: '123123123'
        }
      ]
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>
<style>
.borde{
   text-align:center;
   border: #000000 3px solid;
   margin-bottom: 30px
 }
 .tituloCuadro{
   background-color:#000000;
   padding: 5px;
   color: white
 }
  .botonCerrar{
    background-color: rgba(34, 194, 215, 0.61);
    transition: all .2s linear
  }
  .botonCerrar:hover{
    background-color: rgb(145, 45, 45)
  }
  .botonEmpleados{
    display: inline-block;
    margin-right: 40px;
    background-color: rgba(34, 194, 215, 0.61);
    transition: all .2s linear
  }
  .botonEmpleados:hover{
    background-color: rgb(145, 45, 45)
  }
</style>
