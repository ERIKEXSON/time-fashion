<template>
<nav class="fond">
  <v-card class="mx-auto"
    style="max-width: 500px;">
    <v-toolbar
      color="black"
    >
      <v-card-title class="title font-weight-regular">Mi dirección de envío</v-card-title>
    </v-toolbar>
    <v-form
      ref="form"
      v-model="form"
    >
     <v-textarea
        box
        color="primary"
        label="Nombre y Apellidos"
        rows="1"
      ></v-textarea>
       <v-textarea

        box
        color="primary"
        label="País"
        rows="1"
      ></v-textarea>
      <v-textarea

        box
        color="primary"
        label="Dirección de la calle"
        rows="1"
      ></v-textarea>
        <v-textarea
        box
        color="primary"
        label="Ciudad"
        rows="1"
      ></v-textarea>
        <v-textarea
        box
        color="primary"
        label="Estado/Provincia/Region"
        rows="1"
      ></v-textarea>
      <v-text-field
        v-model="phone"
        box
        color="primary"
        label="Numero Celular"
        mask="phone"
      ></v-text-field>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        flat
        @click="$refs.form.reset()"
        color="error"
      >
      Cancelar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        flat
        :disabled="!form"
        :loading="isLoading"
        class="white--text"
        color="primary"
        depressed
      >Realizado</v-btn>
    </v-card-actions>
  </v-card>
  </nav>
</template>
<script>
export default {
  data: () => ({
    agreement: false,
    form: false,
    isLoading: false,
    phone: undefined,
    rules: {
      length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      required: v => !!v || 'This field is required'
    }
  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'cliente-layout')
  }
}
</script>
<style>
.fond{

  color: black
}
</style>
