<template>
    <v-app>
        <v-form>
            <v-card width="945">
                <v-card-actions>
                    <v-container>
                        <v-layout row>
                            <v-flex md1></v-flex>
                            <v-flex md3>
                                <v-subheader>Contraseña actual</v-subheader>
                            </v-flex>
                            <v-flex md1></v-flex>
                            <v-flex md6>
                                <v-text-field
                                    v-model="currentPassword"
                                    box
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex md1></v-flex>
                            <v-flex md3>
                                <v-subheader>Contraseña nueva</v-subheader>
                            </v-flex>
                            <v-flex md1></v-flex>
                            <v-flex md6>
                                <v-text-field
                                    v-model="newPassword"
                                    box
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex md1></v-flex>
                            <v-flex md3>
                                <v-subheader>Confirmar contraseña nueva</v-subheader>
                            </v-flex>
                            <v-flex md1></v-flex>
                            <v-flex md6>
                                <v-text-field
                                    v-model="newPasswordConfirmed"
                                    box
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-actions>
                <v-card-actions>
                    <div class="boton">
                        <v-btn flat>Cambiar contraseña</v-btn>
                    </div>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-app>
</template>
<script>
export default {
  data () {
    return {
      currentPassword: '',
      newPassword: '',
      newPasswordConfirmed: ''
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'cliente-layout')
  }
}
</script>
<style scoped>
    .boton{
        margin: auto;
        align-content: center
    }
</style>
