<template>
  <v-app>
    <nav style="width:1045px ;text-align: center; border: #000000 3px solid;margin-bottom: 30px">
<<<<<<< HEAD
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
                <v-text-field v-model="form.nombre" :rules="rules.nombre" label="Nombre" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.codigo" :rules="rules.codigo" label="Codigo" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field
                  v-model="form.presio"
                  :rules="rules.presio"
                  label="Presio"
                  required
                  :mask="numeros"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field v-model="form.marca" :rules="rules.marca" label="Marca" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field v-model="form.linea" :rules="rules.linea" label="Linea" required></v-text-field>
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
=======
        <div style="background-color:#000000;padding: 5px;color: white">
          <h2>Agregar Producto</h2>
          <v-snackbar
              v-model="snackbar"
              absolute
              top
              right
              color="success"
            >
              <span>Producto agregado</span>
              <v-icon dark>check_circle</v-icon>
            </v-snackbar>
          </div>
          <v-card flat>
            <v-form ref="form" @submit.prevent="submit">
              <v-container grid-list-xl fluid>
                <v-layout wrap>
                  <v-flex xs12 sm6>
                    <v-text-field v-model="form.nombre" :rules="rules.nombre" label="Nombre" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field
                      v-model="form.codigo" :rules="rules.codigo" label="Codigo" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm4>
                    <v-text-field
                      v-model="form.presio" :rules="rules.presio" label="Presio" required :mask="numeros"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm4>
                    <v-text-field
                      v-model="form.marca" :rules="rules.marca" label="Marca" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm4>
                    <v-text-field
                      v-model="form.linea" :rules="rules.linea" label="Linea" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                  <!-- <img :src="imageUrl" height="150" v-if="imageUrl"/> -->
                  <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
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
                color=""
                type="submit"
                style="background-color: #00FF08"
               >Agregar</v-btn>
      <nav class="cuadro">
        <div style="background-color:#000000;padding: 5px;color: white">
          <h2>Agregar producto</h2>
          <v-snackbar v-model="snackbar" absolute top right color="success" timeout="2000">
            <span>Producto agregado</span>
            <v-icon dark>check_circle</v-icon>
          </v-snackbar>
        </div>
        <v-card flat>
          <v-form ref="form" @submit.prevent="submit">
            <v-container grid-list-xl fluid>
              <v-layout wrap>
                <v-flex xs12 sm6>
                  <v-text-field v-model="form.nombre" :rules="rules.nombre" label="Descripción" required ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field v-model="form.codigo" :rules="rules.codigo" label="Código" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field v-model="form.precio" :rules="rules.precio" label="Precio" required :mask="numeros"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field v-model="form.marca" :rules="rules.marca" label="Marca" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field v-model="form.linea" :rules="rules.linea" label="Linea" required></v-text-field>
                </v-flex>
                <!--cargar imagen-->
                <v-text-field label="Seleccionar Imagen" @click='pickFile' v-model='imageName' prepend-icon='attach_file' required></v-text-field>
                <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked" multiple>
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
>>>>>>> 17beb3698dbdbdd5640ef21cc0c9432b395ee9a6
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
              <v-btn fab small color="error"> <v-icon color="black">delete</v-icon></v-btn>
              <v-btn fab small color="warning"><v-icon color="black">edit</v-icon></v-btn>
              <v-btn fab small color="primary" @click="conditions=true"><v-icon color="black">image</v-icon></v-btn>
            </td>
          </template>
          <!--mostrar la imagen-->
          <v-dialog v-model="conditions" width="1085">
            <v-card>
              <v-card-text>
                <nav style="width: 1045px; text-align: center;border:  #000000 3px solid;margin-bottom: 30px"> 
                  <h3>kajhscuybfnjQY</h3>            
                </nav>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <div class="bt">
                    <v-btn flat @click="conditions=false">Cerrar</v-btn>
                  </div>
                </v-card-actions>
              </v-card-text>
            </v-card>
         </v-dialog>
        </v-data-table>
      </v-card>
    </nav>
  </v-app>
</template>
<script>
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
      imageName: '',
      numeros: '$###.###.##',
      show1: false,
      form: Object.assign({}, defaultForm),
      rules: {
        nombre: [val => (val || '').length > 0 || 'Este campo es requerido'],
        codigo: [val => (val || '').length > 0 || 'Este campo es requerido'],
        presio: [val => (val || '').length > 0 || 'Este campo es requerido'],
        marca: [val => (val || '').length > 0 || 'Este campo es requerido'],
        linea: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      conditions: true,
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
