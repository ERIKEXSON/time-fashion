<template>
  <v-flex xs12>
    <nav class="cdc">
      <div class="cdt">
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
                <v-text-field v-model="form.nombre" :rules="rules.requerido" label="Nombre del producto" required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.codigo" :rules="rules.requerido" label="Codigo" required>
                </v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field v-model="form.precio" :rules="rules.requerido" label="Precio" required :mask="numeros"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field v-model="form.marca" :rules="rules.requerido" label="Marca" required>
                </v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field v-model="form.linea" :rules="rules.requerido" label="Linea" required>
                </v-text-field>
              </v-flex>
              <v-flex xs12 sm12>
                  <v-text-field
                  label="Selecciona una imagen"
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
            <v-btn flat @click="resetForm" class="bt">Cancelar</v-btn>
            <v-btn :disabled="!formIsValid" flat type="submit" class="bt" @click="add">Agregar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </nav>
    <!--Lista de productos-->
    <nav class="cdc">
      <div class="cdt">
        <h2>Productos</h2>
      </div>
      <v-card>
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
            <td class="text-xs-left">{{ props.item.precio }}</td>
            <td class="text-xs-left">{{ props.item.marca }}</td>
            <td class="text-xs-left">{{ props.item.linea }}</td>
            <td class="text-xs-left">
              <v-btn outline fab small color="error">
                <v-icon color="black">delete</v-icon>
              </v-btn>
              <v-btn outline fab small color="warning">
                <v-icon color="black" @click="editPro =true">edit</v-icon>
              </v-btn>
              <v-btn outline fab small color="primary" @click="conditions=true">
                <v-icon color="black">image</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card>
      <!--mostrar la imagen-->
      <v-dialog v-model="conditions">
        <v-card>
          <v-card-text width="fif-content">
            <nav class="cdima">
              <h3>Imagenes de muestra</h3>
            </nav>
            <v-img :src="imageUrl" class="im" @click="pickFile"/>
            <v-img :src="imageUrl" class="im" @click="pickFile"/>
            <v-img :src="imageUrl" class="im" @click="pickFile"/>
            <v-img :src="imageUrl" class="im" @click="pickFile"/>
            <v-img :src="imageUrl" class="im" @click="pickFile"/>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div class="btce">
                <v-btn flat @click="conditions=false" class="bt">Cerrar</v-btn>
              </div>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
      <!-- editar  productos -->
      <v-dialog v-model="editPro">
        <v-card>
          <v-card-text width="fif-content">
            <nav class="cdima">
              <h3>Editar producto</h3>
            </nav>
            <v-card flat>
        <v-form ref="form" @submit.prevent="submit">
          <v-container grid-list-xl fluid>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.nombre" :rules="rules.requerido" label="Nombre del producto" required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.codigo" :rules="rules.requerido" label="Codigo" required>
                </v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field v-model="form.precio" :rules="rules.requerido" label="Precio" required :mask="numeros"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field v-model="form.marca" :rules="rules.requerido" label="Marca" required>
                </v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field v-model="form.linea" :rules="rules.requerido" label="Linea" required>
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-card>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div class="btce">
                <v-btn flat @click="editPro=false" class="bt">Cerrar</v-btn>
              </div>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
    </nav>
  </v-flex>
</template>
<script>
import buso from '@/assets/ico.png'
import api from '@/plugins/api'
import { mapState } from 'vuex'
export default {
  data () {
    const defaultForm = Object.freeze({
      nombre: '',
      codigo: '',
      precio: '',
      marca: '#######',
      linea: '######'
    })
    return {
      imageUrl: buso,
      imageName: '',
      numeros: '##.#####',
      show1: false,
      form: Object.assign({}, defaultForm),
      rules: {
        requerido: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      editPro: false,
      conditions: false,
      snackbar: false,
      defaultForm,
      search: '',
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Codigo', value: 'codigo' },
        { text: 'Precio', value: 'precio' },
        { text: 'Marca', value: 'marca' },
        { text: 'Linea', value: 'linea' },
        { text: 'Acciones', sortable: false }
      ],
      desserts: [
        {
          nombre: '',
          codigo: '',
          presio: '',
          marca: '',
          linea: ''
        }
      ]
    }
  },
  computed: {
    ...mapState(['products']),
    formIsValid () {
      return (
        this.form.nombre &&
        this.form.codigo &&
        this.form.precio &&
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
        if (files.length === 1) {
          this.imageName = files[0].name
        } else {
          this.imageName = `${files.length}`
        }
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
    },
    async add () {
      const res = await api.post('/products', {
        productsNew: {
          nombre: this.lowerCase(this.form.nombre),
          codigo: this.lowerCase(this.form.codigo),
          precio: this.lowerCase(this.form.precio)
        }
      })
      let clonProductos = [...this.productos]
      clonProductos.push(products)
      this.$store.commit('SET_PRODUCTOS', clonProductos)
      this.snackbar = true
      this.resetForm()
    },
    async update () {
      const { data: products } = await api.put(`/products/${this.products.uuid}`, {
        productsUpdate: {
          nombre: this.form.nombre,
          codigo: this.form.codigo,
          precio: this.form.precio
        }
      })
      this.snackbar = true
    },
    lowerCase (val) {
      return val.toLowerCase()
    },
    async getProductos () {
      const { data: productosData } = await api.get('/products')
      this.$store.commit('SET_PRODUCTOS', productosData)
    },
    async deteleProducctos (item) {
      try {
        const { data } = await api.delete(`/products/${item.uuid}`)
        let clonProductos = [...this.productos]
        const index = this.productos.indexOf(item)
        clonProductos.splice(index, 1)
        this.$store.commit('SET_PRODUCTOS', clonProductos)
      } catch (error) {
        console.error(error)
      }
    }
  },
  created () {
    this.getProductos()
    this.$store.commit('SET_LAYOUT', 'vendedor-layout')
  }
}
</script>
<style>
.cdc {
  text-align: center;
  border: #000000 3px solid;
  margin-bottom: 30px;
  border-radius: 5px;
}
.cdt {
  background-color: #000000;
  padding: 5px;
  color: white;
  border-radius: 1px;
}
.cdima {
  text-align: center;
  margin-bottom: 30px;
  background-color: #000000;
  color: whitesmoke;
  font-size: 25px;
  border-radius: 5px;
}
.bt {
  background-color: rgba(206, 98, 252, 0.795);
  transition: all 0.2s linear;
  text-align: center;
  border-radius: 15px;
}
.bt:hover {
  background-color: rgba(136, 16, 248, 0.795);
  border-radius: 15px;
}
.im {
  display: inline-block;
  margin-left: 10px;
  height: 320px;
  width: 238px;
}
</style>
