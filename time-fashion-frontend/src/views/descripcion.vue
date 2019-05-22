<template>
  <app>
    <v-flex style="margin-left: 250px; margin-bottom: -290px">
      <div class="title">Jeans Azul Rotos</div>
      <div class="caption">Item: *****</div>
      <v-card-actions></v-card-actions>
      <div class="title">$84.000</div>
      <v-card-actions></v-card-actions>
      <v-card-actions></v-card-actions>
      <v-card-actions></v-card-actions>
      <div class="body-2" style="display: inline-block">Talla</div>
      <div class="body-2" style="display: inline-block; margin-left: 190px">Talla</div>
      <v-container style="margin-left: -25px; width: 250px; margin-top: -20px" >
        <v-layout wrap align-center>
          <v-flex >
            <v-select
              :items="items2"
              label="Escoge una opción"
              solo
            ></v-select>
          </v-flex>
        </v-layout>
      </v-container>
      <v-form>
        <v-container style="margin-left: 200px; margin-top: -116px">
          <v-flex sm2>
            <v-text-field
              v-model="message2"
              solo
            ></v-text-field>
          </v-flex>
        </v-container>
      </v-form>
      <v-btn color="black" style="margin-left: -2px; margin-top: -20px">
        <v-layout
          align-end
          fill-height
          pa-1
          white--text
        >
          <v-icon>add_shopping_cart</v-icon>
          <div class="titlefont-weight-thin">Agregar al carrito</div>
        </v-layout>
      </v-btn>
    </v-flex>
    <v-container style="margin-left: -360px; width:950px">
      <v-flex xs6 sm6 md>
        <v-carousel >
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade"
            transition="fade"
          ></v-carousel-item>
        </v-carousel>
      </v-flex>
  </v-container>
  <v-flex xs6 sm6 md style="width: 450px; margin-left: 200px; margin-top: -175px">
    <v-expansion-panel
      style="width: 450px "
    >
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
    </v-flex>
  </app>
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      items: [
        {
          src: 'https://www.mattelsa.net/media/catalog/product/cache/1/small_image/420x500/9df78eab33525d08d6e5fb8d27136e95/3/4/34269-1.jpg'
        },
        {
          src: 'https://www.mattelsa.net/media/catalog/product/cache/1/small_image/420x500/9df78eab33525d08d6e5fb8d27136e95/3/4/34269-2.jpg'
        },
        {
          src: 'https://www.mattelsa.net/media/catalog/product/cache/1/small_image/420x500/9df78eab33525d08d6e5fb8d27136e95/3/4/34269-3.jpg'
        },
        {
          src: 'https://www.mattelsa.net/media/catalog/product/cache/1/small_image/420x500/9df78eab33525d08d6e5fb8d27136e95/3/4/34269-4.jpg'
        }
      ],
      items2: ['Escoge una opción', 'S', 'M', 'L'],
      message2: '1'
    }
  }
}
</script>
<style lang="stylus">
  #example-custom-transition
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
</style>
