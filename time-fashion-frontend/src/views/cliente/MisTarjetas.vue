<template>
  <v-app>
    <v-toolbar class="elevation-1" color="white">
      <v-toolbar-title>Mis tarjetas</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" class="mb-2" v-on="on">Agregar tarjeta</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.nombres" label="Nombres" :rules="rules.required" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.apellidos" label="Apellidos" :rules="rules.required" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.pais" label="País" :rules="rules.required" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.vivienda" label="Estado/Provincia/Región" :rules="rules.required" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.direccion" label="Dirección" :rules="rules.required" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.celular" label="Teléfono móvil" :rules="rules.required" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancelar</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.nombres }}</td>
        <td class="text-xs-left">{{ props.item.apellidos }}</td>
        <td class="text-xs-left">{{ props.item.pais }}</td>
        <td class="text-xs-left">{{ props.item.vivienda }}</td>
        <td class="text-xs-left">{{ props.item.direccion }}</td>
        <td class="text-xs-left">{{ props.item.celular }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon small @click="deleteItem(props.item)">delete</v-icon>
        </td>
      </template>
    </v-data-table>
  </v-app>
</template>
<script>
import Swal from 'sweetalert2'
export default {
  data () {
    return {
      rules: { required: [val => (val || '').length > 0 || 'Este campo es requerido'] },
      dialog: false,
      headers: [
        { text: 'Número de tarjeta', value: 'numerotarjeta', sortable: false },
        { text: 'Nombre y apellido', value: 'nombres', sortable: false },
        { text: 'Fecha de expiración', value: 'fechaexpiracion', sortable: false },
        { text: 'Código de seguridad', value: 'codigoseguridad', sortable: false },
        { text: 'Tipo de documento', value: 'tipodocumento', sortable: false },
        { text: 'Número de documento', value: 'documento', sortable: false },
        { text: 'Acciones', sortable: false }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        numerotarjeta: '',
        nombres: '',
        fechaexpiracion: '',
        codigoseguridad: '',
        tipodocumento: '',
        documento: ''
      },
      defaultItem: {
        numerotarjeta: '',
        nombres: '',
        fechaexpiracion: '',
        codigoseguridad: '',
        tipodocumento: '',
        documento: ''
      }
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nueva tarjeta' : 'Editar tarjeta'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    async deleteItem (item) {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esto no será reversible',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, ¡bórralo!',
        cancelButtonText: 'No, ¡cancélalo!'
      })
      if (result.value) {
        const index = this.desserts.indexOf(item)
        this.desserts.splice(index, 1)
        Swal.fire(
          '¡Eliminado!',
          'Tu tarjeta ha sido eliminada',
          'success'
        )
      }
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'cliente-layout')
  }
}
</script>
