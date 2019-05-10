<template>
  <v-app>
    <nav class="cuadrofactura">
      <div style="background-color:#000000;padding: 5px;color: white">
        <h2>Factura</h2>
      </div>
      <nav>
        <h2 class="fecha" type="Date">Fecha: {{ }}</h2>
        <h2 class="Numfac">Numero: {{ uno }}</h2>
      </nav>
      <v-card flat>
        <v-form ref="form" @submit.prevent="submit">
          <v-container grid-list-xl fluid>
            <div>
              <v-img :src="img" class="ima"></v-img>
              <nav class="cabe">
                <h4>nit: 977319279</h4>
                <h4>Calle rio de san gil</h4>
                <h4>Cra 12#28-98</h4>
                <h4>tel:918273987</h4>
                <h4>Lorrobe@porbobo.com</h4>
              </nav>
              <nav class="cabe1">
                <h3>Cliente</h3>
                <h4>Gregorio alias capi</h4>
                <h4>San gil</h4>
                <h4>Cra 20#14-13a</h4>
                <h4>tel.312697845</h4>
                <h4>por siacas</h4>
              </nav>
            </div>
            <!--tabla-->
            <template>
              <v-data-table :headers="headers" :items="desserts" class="elevation-1" hide-actions>
                <template v-slot:items="props">
                  <td class="text-xs-left">{{ props.item.name }}</td>
                  <td class="text-xs-left">{{ props.item.detalle }}</td>
                  <td class="text-xs-left">{{ props.item.precio }}</td>
                  <td class="text-xs-left">{{ props.item.neto }}</td>
                  <td class="text-xs-left">{{ props.item.iva }}</td>
                </template>
              </v-data-table>
            </template>
            <!--tercera parte-->
            <nav class="resul1">
              <div class="h2">
                <h3>TOTAL IVA:</h3>
              </div>
              <div class="h3">
                <h3>8742698</h3>
              </div>
              <div class="h2">
                <h3>TOTAL RETENCION:</h3>
              </div>
              <div class="h3">
                <h3>541264</h3>
              </div>
              <div class="h2">
                <h3>TOTAL FACTURA:</h3>
              </div>
              <div class="h3">
                <h3>526952584</h3>
              </div>
            </nav>
          </v-container>
        </v-form>
      </v-card>
    </nav>
  </v-app>
</template>
<script>
import img from '@/assets/logito.png'
export default {
  data () {
    return {
      date: Date(),
      fecha: 'Date',
      img,
      headers: [
        { text: 'Cantidad', value: 'name', sortable: false },
        { text: 'Detalle', value: 'detalle', sortable: false },
        { text: 'Precio', value: 'precio', sortable: false },
        { text: 'Neto', value: 'neto', sortable: false },
        { text: 'IVA', value: 'iva', sortable: false }
      ],
      desserts: [
        {
          name: '2',
          detalle: 'camisa lacost ',
          precio: 24,
          neto: 4.0,
          iva: '1%'
        },
        {
          name: '3',
          detalle: 'camisa addidas ',
          precio: 24000,
          neto: 3.0,
          iva: '0,5%'
        }
      ]
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'vendedor-layout')
  }
}
</script>
<style>
.cabe {
  display: inline-block;
  margin: 2px 80px 5px 5px;
  text-align: left;
  border-radius: 5px;
}
.cabe1 {
  display: inline-block;
  margin: 2px 25px 5px 10px;
  text-align: left;
}
.ima {
  width: 300px;
  height: 120px;
  display: inline-block;
  margin: 2px 35px 5px 5px;
}
.cuadrofactura {
  width: 845px;
  text-align: center;
  border: #000000 3px solid;
  margin-bottom: 30px;
  border-radius: 5px;
}
.cuadcuenta {
  width: 745px;
  margin: auto;
}
.Numfac {
  display: inline-block;
  margin: 0 2px 0 2px;
}
.fecha {
  display: inline-block;
  margin: 10px;
}
.resul1 {
  text-align: right;
  margin-top: 20px;
}
.h2 {
  display: inline-block;
  width: 600px;
  text-align: right;
}
.h3 {
  display: inline-block;
  text-align: right;
  width: 203px;
}
</style>
