<template>
            <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                <v-flex xs12 sm md12>
                    <v-card class="elevation-12">
                    <v-toolbar color="black" >
                        <div style="width:417.66px; text-align:center">
                            <v-toolbar-title style="color:white" >Ingresa tu usuario y contraseña</v-toolbar-title>
                        </div>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                        <v-text-field prepend-icon="person" name="login" label="Usuario" type="text" color="black"></v-text-field>
                        <v-text-field prepend-icon="lock" name="password" label="Contraseña" id="password" type="password" color="black"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <div style="width: 417.66px; text-align:center">
                            <v-btn style="background-color:black; color:white">Ingresar</v-btn>
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
