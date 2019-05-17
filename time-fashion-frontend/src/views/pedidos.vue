<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Carrito de compras</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Revisar pedido</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Pedido Procesado</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-5"
          color="black"
          height="200px"
        >
          <v-toolbar color="white">
            <v-toolbar-title>Productos</v-toolbar-title>
            <v-toolbar-title style="margin-left:520px; margin-right:10px">Precio</v-toolbar-title>
            <v-toolbar-title style="margin-left:50px;margin-right:40px">Cantidad</v-toolbar-title>
            <v-toolbar-title style="margin-right:10px">Total</v-toolbar-title>
          </v-toolbar>
          <v-card-actions class="black">
            <v-card-text>
            <v-img :src="frases" class="img-responsive3" @click="clickPush('/tanks-hombre')">
            </v-img>
            </v-card-text>
            <v-layout
              align-end
              fill-height
              pa-3
              white--text
            >
              <div class="titlefont-weight-thin">
                <v-title style="margin-right:130px">$30.000</v-title>
                <v-title style="margin-left:-20px; margin-right:90px">1</v-title>
                <v-title style="margin-right:200px">$30.000</v-title>
              </div>
            </v-layout>
          </v-card-actions>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Hacer Compra
        </v-btn>
        <v-btn
          color="primary"
          to="/"
        >
          Continuar Comprando
        </v-btn>

        <v-btn to="/carrito" >Borrar Pedido</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
           <div>
            <div class="headline">1. Regístrate</div>
            <span class="grey--text">
              Para poder hacer el pedido debes estar registrado, esto con el fin de permitirte hacer:
              <v-spacer></v-spacer>
              1.Seguimiento a tu pedido <v-spacer></v-spacer>
              2.Mantener un historial de pedido <v-spacer></v-spacer>
              3.Almacenar direcciones y datos de contacto para próximas compras <v-spacer></v-spacer>
              4.Una navegación más fácil en el sitio <v-spacer></v-spacer>
            </span>
            <v-card-actions class="tilte">
              Si ya tienes una cuenta (estás registrado) ingresa aquí:
            </v-card-actions>
            <v-card-actions>
              <v-form>
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs6>
                      <v-text-field
                        label="Email"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Contraseña"
                        outline
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>
            </v-card-actions>
          </div>
          <v-btn color="#546E7A" to="/registrarse">registrate</v-btn>
          <v-btn color="#546E7A"  @click="step++" >Entrar</v-btn>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <div class="headline">1. Datos de Envío</div>
          <v-card-actions>
              <v-form>
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs6>
                      <v-text-field
                        label="Nombre"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Apellido"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Correo electronico"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Cédula"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Teléfono/Celular"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Departamento"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Ciudad"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Barrio"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <span>
                      Enviaremos la factura a tu correo electrónico, te llegará desde <span style="color: blue">siesafe@siesa.com</span><v-spacer></v-spacer>
                      Si no lo ves en tu bandeja de entrada busca en spam
                    </span>
                  </v-layout>
                </v-container>
              </v-form>
            </v-card-actions>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <v-card-text>
          <div class="headline">2. Método de Envío</div>
          <v-card-actions></v-card-actions>
          <v-card-actions>Tu envío es gratis si compras más de $40.000 en ropa sin descuento.</v-card-actions>
          <span>
            TCC<v-spacer></v-spacer>
            4 días hábiles. * $10.000 Tu pedido se procesará en 24 horas y desde ese momento empiezan a contar los días hábiles (Sábados, domingos y festivos no son días hábiles)
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="4">
        <v-card-text>
          <div class="headline">3. Información de pago</div>
          <v-container fluid>
            <v-radio-group v-model="radios" :mandatory="false">
              <v-radio label="Tarjeta de crédito" value="radio-1"></v-radio>
              <v-radio label="Pago con débito - PSE" value="radio-2"></v-radio>
              <v-radio label="Pago en efectivo - Efecty" value="radio-3"></v-radio>
            </v-radio-group>
          </v-container>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="5">
        <v-card-text>
          <div class="headline">4. Términos y Condiciones</div>
        </v-card-text>
      </v-window-item>
    </v-window>
    <v-divider></v-divider>

      <v-card-actions
    >
      <v-btn
        :disabled="step === 2"
        flat
        @click="step--"
      >
        Atras
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 1"
        color="primary"
        depressed
        @click="e1 = 3"
      >
        Finalizar Compra
      </v-btn>
      <v-btn
        :disabled="step === 1"
        color="primary"
        depressed
        @click="step++"
      >
        Continuar
      </v-btn>
    </v-card-actions>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Volver al carrito
        </v-btn>
        
        <v-btn flat to="/">Cancelar</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import FRASES from '@/assets/hombre/tanks/azuloscuro.jpg'
export default {
  data () {
    return {
      step: 1,
      e1: 0,
      frases: FRASES
    }
  },
  methods: {
    clickPush (value) {
      this.$router.push(value)
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  computed: {
    currentTitle () {
      switch (this.step) {
        case 1: return 'Sign-up'
        case 2: return 'Create a password'
        default: return 'Account created'
      }
    }
  }
}

</script>
<style>
.img-responsive3{
  padding: 40px 30px 0px 50px;
  display: inline-block;
  height: 100px;
  width: 100px;
}
</style>