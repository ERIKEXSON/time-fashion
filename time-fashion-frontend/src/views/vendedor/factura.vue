<template>
  <v-app>
    <nav class="cuadrofactura">
      <div style="background-color:#000000;padding: 5px;color: white">
        <h2>Factura</h2>
      </div>
      <nav>
        <h2 class="fecha" :mask="DateTime">Fecha: {{ date }}</h2>
        <h2 class="tip">Numero: {{ uno }}</h2>
      </nav>
      <v-card flat>
        <v-form ref="form" @submit.prevent="submit">
          <v-container grid-list-xl fluid>
            <div>
              <v-img :src="img" class="ima"></v-img>
              <nav class="cabe">
                <h4>asdasdasdas</h4>
                <h4>asdasdasdas</h4>
                <h4>asdasdasdas</h4>
                <h4>asdasdasdas</h4>
                <h4>khsdbjhbnksjdnkfu</h4>
              </nav>
              <nav class="cabe1">
                <h4>capi capi capi</h4>
                <h4>capi capi capi</h4>
                <h4>capi capi capi</h4>
                <h4>capi capi capi</h4>
                <h4>capi cap capi</h4>
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
            <div>
            <nav class= "resul1">
                <div>
                <h3>Base imponible al % de IVA:</h3>
                </div>
                <div>
                  <h3>sdjhb</h3>
                </div>
                <div>
                  <h3>f</h3>
                </div>
            </nav>
            <nav class="resul2">
                <div>
                  <h2>TOTAL IVA:</h2>
                </div>
                <div>
                <h2>TOTAL RETENCION:</h2>
                </div>
                <div>
                <h2>TOTAL FACTURA:</h2>
                </div>
            </nav>
            </div>

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
  margin: 2px 150px 5px 5px;
}
.cabe1 {
  display: inline-block;
  margin: 2px 15px 5px 10px;
}
.ima {
  width: 300px;
  height: 120px;
  display: inline-block;
  margin: 2px 50px 5px 5px;
}
.cuadrofactura {
  width: 845px;
  text-align: center;
  border: #000000 3px solid;
  margin-bottom: 30px;
}
.cuadcuenta {
  width: 745px;
  margin: auto;
}
.tip {
  display: inline-block;
  margin: 0 2px 0 2px;
}
.fecha {
  display: inline-block;
  margin: 10px;
}
.resul1{
  display:inline-block;
  margin: 20px 150px 0 5px;
  text-align: left
}
.resul2{
   display:inline-block;
  margin: 20px 150px 0 50px;
  text-align: left
}
</style>
