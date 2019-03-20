<template>
  <v-card
      style="width: fit-content; height:fit-content; position: relative; top:0; bottom:0; left:0; rigth:0; margin:auto; font-size:30px">
    <v-card-title>
      INVENTARIO
      <v-spacer></v-spacer>
      <div >
        <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      </div>

    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    >
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.codigo }}</td>
        <td class="text-xs-left">{{ props.item.marca }}</td>
        <td class="text-xs-left">{{ props.item.cantidad }}</td>
        <td class="text-xs-left">{{ props.item.valor }}</td>
        <button
        style="font-size:15px; position: relative; color:#6a1b9a; border: solid 2px #6a1b9a; bottom: 5px; right: 8px"
        >
        Opciones
        </button>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Código', value: 'codigo' },
        { text: 'Marca', value: 'marca' },
        { text: 'Cantidad', value: 'cantidad' },
        { text: 'Valor', value: 'valor' },
        { text: '' }
      ],
      desserts: [
        {
          name: 'camison',
          codigo: '87364502-1',
          marca: 'roballo',
          cantidad: 2388492,
          valor: 78234
        }
      ]
    }
  }
}
</script>
