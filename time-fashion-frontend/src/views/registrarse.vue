<template>
            <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                <v-flex xs12 sm md12>
                    <v-card class="elevation-12">
                    <v-toolbar color="black">
                        <div style="width:417.66px; text-align:center">
                            <v-toolbar-title style="color:white">Crea cuenta nueva</v-toolbar-title>
                        </div>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                        <v-text-field name="login" label="Nombre" type="text" color="black"></v-text-field>
                        <v-text-field name="login" label="Apellido" type="text" color="black"></v-text-field>
                        <v-text-field name="login" label="Cedula" type="text" color="black"></v-text-field>
                        <v-text-field name="login" label="Departamento" type="text" color="black"></v-text-field>
                        <v-text-field name="login" label="Ciudad" type="text" color="black"></v-text-field>
                        <v-text-field name="login" label="Dirección de Email" type="text" color="black"></v-text-field>
                        <v-text-field name="login" label="Confirmar Email" type="text" color="black"></v-text-field>
                        <v-text-field name="password" label="Contraseña" id="password" type="password" color="black"></v-text-field>
                        <v-text-field name="password" label="Confirmar Contraseña" id="password" type="password" color="black"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <div style="width: 417.66px; text-align:center">
                            <v-btn style="background-color:black; color:white">Registrarse</v-btn>
                        </div>
                    </v-card-actions>
                    </v-card>
                </v-flex>
                </v-layout>
            </v-container>
            </v-content>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
