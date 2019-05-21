<template>
  <v-expansion-panel
    style="width: 450px"
  >
    <v-expansion-panel-content
      v-for="(item,i) in 1"
      :key="i"
      expand-icon="swap_vertical_circle"
    >
      <template v-slot:header>
        <div class="title">Cuál es mi talla</div>
      </template>
      <v-card>
        <v-card-text class="grey lighten-3">
          La modelo usa talla S <v-spacer></v-spacer>
          Altura 174 cms <v-spacer></v-spacer>
          
          <div class="text-xs-center">
            <v-dialog
              v-model="dialog"
              width="900"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  color="blue"
                  dark
                  v-on="on"
                >
                Tabla de medidas y más información
                </v-btn>
              </template>

              <v-card>
                <v-card-actions class="black">
                  <v-layout
                    align-end
                    fill-height
                    pa-1
                    white--text
                  >
                    <div class="titlefont-weight-thin">GUÍA DE TALLAS
                      <v-btn
                      color="black" @click="dialog = false"
                      style="margin-left: 679px"
                      >
                        <v-icon color="white">cancel</v-icon>
                      </v-btn></div>
                  </v-layout>
                </v-card-actions>

                <v-card-text>
                  <v-layout row wrap>
                    <v-flex xs6 sm6 md>
                      <img src="@/assets/guia.jpg" alt="">
                    </v-flex>
                    <v-flex xs6 sm6 md>
                      <img style="margin-top: 100px; margin-left: -30px" src="@/assets/tallaje.png" alt="">
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-dialog>
          </div>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content
      v-for="(item,i) in 1"
      :key="i"
      expand-icon="swap_vertical_circle"
    >
      <template v-slot:header>
        <div class="title">Descripción y Cuidado</div>
      </template>
      <v-card>
        <img style="margin-left:30px" src="@/assets/cuidado.png" alt="">
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content
      v-for="(item,i) in 1"
      :key="i"
      expand-icon="swap_vertical_circle"
    >
      <template v-slot:header>
        <div class="title">Logistica de envío </div>
      </template>
    <v-container fluid grid-list-md>
      <img src="@/assets/logistica.png" alt="">
  </v-container>
    </v-expansion-panel-content>
    <v-expansion-panel-content
      v-for="(item,i) in 1"
      :key="i"
      expand-icon="swap_vertical_circle"
    >
      <template v-slot:header>
        <div class="title">Cambios y Garantías</div>
      </template>
    <v-container fluid grid-list-md>
      <img src="@/assets/cambios.png" alt="">
  </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false
      }
    }
  }
</script>