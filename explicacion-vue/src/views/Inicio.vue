<template>
    <div>
        <h1>Inicio</h1>
        Nombre: <input type="text" v-model="nombre"/>
        <p>{{nombre}}</p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      nombre: ''
    }
  }
}
</script>
