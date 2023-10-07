<template>
  <v-container>
    <section class="banner">
      <v-row justify="center">
        <v-col sm="12" class="d-flex justify-center">
          <v-img
            :max-width="180"
            aspect-ratio="1/1"
            cover
            :src=imagenLogo
            class="d-flex justify-center"
          ></v-img>
        </v-col>
      <CarruselComp/>
    </v-row>
    </section>
  </v-container>
    <section class="productos-item">
      <ParallaxComp/>
    </section>
    <section class="nueva-tienda">
      <NewShop />
    </section>
</template>

<script setup>
import CarruselComp from '@/components/CarruselComp.vue'
import ParallaxComp from '@/components/ParallaxComp.vue'
import NewShop from '@/components/NewShop.vue'


const imagenLogo = require('@/assets/img/logo.png')


</script>

<style scoped>

.productos-item {
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),url('../assets/img/heladeria_fondo_mod.png');
  background-repeat: no-repeat;
  background-position: center;
  height: 1000px;
}
.nueva-tienda {
  height: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),url('../assets/img/fondo-tienda.png');
  background-repeat:no-repeat;
  background-size: cover;
}

</style>
