<template>
    <div class="imagenInicio2">
      <img src="@/assets/favicon.png" width="250" height="250">
      <h1>Bienvenido</h1>
      <h1>Tu carrito de compras ahora está vacío.</h1>
      <v-btn round to="/" color="primary">Entra y busca tus productos</v-btn>
      <v-spacer></v-spacer>
      <v-btn round to="/pedidos" color="primary">Revisar mis pedidos</v-btn>
    </div>
</template>
<style>
    .img-responsive{
    display: block;
    max-width: 100%;
    height: auto;
    }
    .imagenInicio2{
    text-align: center;
    width: fit-content;
    margin: 10px auto 50px auto
  }
</style>
