<template>
    <v-container>
        <v-row d-flex align="center">
            <v-col cols="12" md="6">
                <v-card elevation="8" color="#d8d8d8">
                    <v-img max-width="580" height="600" aspect-ratio="1/1" :src="imgNuevaTienda">
                    </v-img>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <div class="card-container">
                    <v-card color="#d42a5b" pa-5 elevation="8" class="new-shop">
                    <h3 class="shop-title">Gran Inaguración</h3>
                    <p class="text-h5 pl-5">Proximamente</p>
                    <h6 class="pa-5 text-h5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a iure voluptate in ad, nihil
                        corporis, deserunt consectetur earum labore saepe ipsum ducimus modi voluptates voluptatem, ratione
                        eveniet fugiat!
                    </h6>
                </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>


const imgNuevaTienda = require('@/assets/img/dulcinea_tienda.png')



</script>

<style scoped>
.shop-title {
  font-family: 'Dancing Script', cursive;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  font-weight: 700;
  font-size: 4rem;
}

@media  (min-width: 959px) {
    .new-shop{
        height: 600px;
        width: 600px;
    }
}

</style>