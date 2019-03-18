<template>
    <div>
        <h1>Peliculas</h1>
        <button @click="agregar">Agregar</button>
        <button @click="restar">Restar</button>
        <p>{{contador}}</p>
    </div>
</template>
<script>
export default {
  name: 'peliculas',
  data () {
    return {
      contador: 0
    }
  },
  methods: {
    agregar () {
      // contador =+ 1
      // contador = contador + 1
      this.contador++
    },
    restar () {
      this.contador--
    }
  }
}
</script>
