<template>
  <Administrador></Administrador>
  <!-- <HomeEstacionamento></HomeEstacionamento> -->
</template>

<script lang="ts">
import Administrador from '@/views/Administrador.vue'
import HomeEstacionamento from '@/views/HomeEstacionamento.vue'
export default {
  name: "App",
  components: {
    Administrador
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap');
$font-color: white;
$backgroud-primary-color: #FF7272;
$button-togle-color: #f69a9a;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.bg-color-primary {
  background-color: #FF7272;
}

.font-color-primary {
  color: white;
}

.font-family {
  font-family: 'Dongle', sans-serif;
}

.font-title {
  font-size: 2em;
  font-weight: 400;
}

.decoration-off {
  text-decoration: none !important;
}

.button {
  background-color: $backgroud-primary-color;
  border: none;
  color: $font-color;
}
</style>
