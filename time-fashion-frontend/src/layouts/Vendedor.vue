<template>
    <v-navigation-drawer
        stateless
        value="true"
        style="background-color: RGB(105, 105, 105)"
    >
        <v-list style="color: white">
        <v-list-tile>
            <v-list-tile-action>
            <v-icon style="color:white">home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Vendedor</v-list-tile-title>
        </v-list-tile>

            <v-list-tile
                v-for="(admin, i) in admins"
                :key="i"
                @click=""
            >
                <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                <v-list-tile-action>
                <v-icon v-text="admin[1]" style="color:white"></v-icon>
                </v-list-tile-action>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    admins: [
      ['Datos de los productos', 'assignment'],
      ['Inventario', 'all_inbox'],
      ['Empleados', 'assignment_ind']
    ]
  })
}
</script>
