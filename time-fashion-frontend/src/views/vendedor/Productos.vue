<template>
  <v-app>
    <nav style="width:1045px ;text-align: center; border: #000000 3px solid;margin-bottom: 30px">
      <div style="background-color:#000000;padding: 5px;color: white">
        <h2>Agregar Producto</h2>
        <v-snackbar v-model="snackbar" absolute top right color="success">
          <span>Producto agregado</span>
          <v-icon dark>check_circle</v-icon>
        </v-snackbar>
      </div>
      <v-card flat>
        <v-form ref="form" @submit.prevent="submit">
          <v-container grid-list-xl fluid>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.nombre" :rules="rules.requerido" label="Nombre" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.codigo" :rules="rules.requerido" label="Codigo" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field
                  v-model="form.presio"
                  :rules="rules.requerido"
                  label="Presio"
                  required
                  :mask="numeros"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field v-model="form.marca" :rules="rules.requerido" label="Marca" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field v-model="form.linea" :rules="rules.requerido" label="Linea" required></v-text-field>
              </v-flex>
              <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                <!-- <img :src="imageUrl" height="150" v-if="imageUrl"/> -->
                <v-text-field
                  label="Select Image"
                  @click="pickFile"
                  v-model="imageName"
                  prepend-icon="attach_file"
                ></v-text-field>
                <input
                  type="file"
                  style="display: none"
                  ref="image"
                  accept="image/*"
                  @change="onFilePicked"
                  multiple
                >
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn flat @click="resetForm" style="background-color: #00FF08">Cancelar</v-btn>
            <v-btn
              :disabled="!formIsValid"
              flat
              color
              type="submit"
              style="background-color: #00FF08"
            >Agregar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </nav>
    <!--Lista de productos-->
    <nav style="text-align:center;border: #000000 3px solid;margin-bottom: 30px">
      <div style="background-color:#000000;padding: 5px;color: white">
        <h2>Productos</h2>
      </div>
      <v-card width="1040">
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="desserts" :search="search">
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.nombre }}</td>
            <td class="text-xs-left">{{ props.item.codigo }}</td>
            <td class="text-xs-left">{{ props.item.presio }}</td>
            <td class="text-xs-left">{{ props.item.marca }}</td>
            <td class="text-xs-left">{{ props.item.linea }}</td>
            <td class="text-xs-left">
              <v-btn fab small color="error">
                <v-icon color="black">delete</v-icon>
              </v-btn>
              <v-btn fab small color="warning">
                <v-icon color="black">edit</v-icon>
              </v-btn>
              <v-btn fab small color="primary" @click="conditions=true">
                <v-icon color="black">image</v-icon>
              </v-btn>
            </td>
          </template>
          <!--mostrar la imagen-->
        </v-data-table>
      </v-card>
      <!--mostrar la imagen-->
      <v-dialog v-model="conditions" width="1085">
        <v-card>
          <v-card-text>
            <nav class="cuadima">
              <h3>Imagenes de muestra</h3>
            </nav>
              <v-img :src="imageUrl" height="320" width="250" class="im"/>
              <v-img :src="imageUrl" height="320" width="250" class="im"/>
              <v-img :src="imageUrl" height="320" width="250" class="im"/>
              <v-img :src="imageUrl" height="320" width="250" class="im"/>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div class="btce">
                <v-btn flat @click="conditions=false">Cerrar</v-btn>
              </div>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
    </nav>
  </v-app>
</template>
<script>
import buso from '@/assets/busos.png'
export default {
  data () {
    const defaultForm = Object.freeze({
      nombre: '',
      codigo: '',
      presio: '',
      marca: '',
      linea: ''
    })
    return {
      imageUrl: buso,
      imageName: '',
      numeros: '$###.###.##',
      show1: false,
      form: Object.assign({}, defaultForm),
      rules: {
        requerido: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      conditions: false,
      snackbar: false,
      defaultForm,
      search: '',
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Codigo', value: 'codigo' },
        { text: 'Presio', value: 'presio' },
        { text: 'Marca', value: 'marca' },
        { text: 'Linea', value: 'linea' },
        { text: 'Acciones', sortable: false }
      ],
      desserts: [
        {
          nombre: 'camisa',
          codigo: '654tgtg',
          presio: '6454654',
          marca: 'roballo',
          linea: 'zapatos'
        }
      ]
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.nombre &&
        this.form.codigo &&
        this.form.presio &&
        this.form.marca &&
        this.form.linea
      )
    }
  },
  methods: {
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    submit () {
      this.snackbar = true
      this.resetForm()
    },
    pickFile () {
      this.$refs.image.click()
    },
    onFilePicked (e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.imageUrl = fr.result
          this.imageFile = files[0]
        })
      } else {
        this.imageName = ''
        this.imageFile = ''
        this.imageUrl = ''
      }
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'vendedor-layout')
  }
}
</script>
<style>
.cuadima {
  width: 1045px;
  text-align: center;
  margin-bottom: 30px;
  background-color: #000000;
  color: whitesmoke;
}
.btce {
  background-color: rgba(34, 194, 215, 0.61);
  transition: all 0.2s linear;
  text-align: center;
}
.im{
  display:inline-block;
  margin-left: 10px
}
</style>
