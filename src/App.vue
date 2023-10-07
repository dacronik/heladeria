<template>
  <v-app class="fondo">
    <NavBar/>
    <v-main>
      <router-view/>
    </v-main>
    <footer-heladeria/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterHeladeria from './components/FooterHeladeria.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    NavBar,
    'footer-heladeria': FooterHeladeria
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');

.fondo {
  background-color: #fbcfe8;
}
</style>