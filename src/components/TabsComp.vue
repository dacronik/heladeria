<template>
    <v-card>
        <v-tabs v-model="tab" color="#d42a5b" align-tabs="center">
            <v-tab :value="1">Helados</v-tab>
            <v-tab :value="2">Conos</v-tab>
            <v-tab :value="3">Paletas</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item v-for="helado in helados" :key="helado.nameHelado" :value="helado.tab">
                <v-container fluid>
                    <v-row>
                        <v-col v-for="(helado, index) in filterHelados" :key="index" cols="12" md="4">
                                <v-img width="400" height="400" :src="helado.imagen" cover :title="helado.nameHelado"
                                :lazy-src='helado.nameHelado' aspect-ratio="1"><div class="img-title">{{ helado.nameHelado }}</div>
                            </v-img>
                        </v-col>
                    </v-row>
                </v-container>
            </v-window-item>
        </v-window>
    </v-card>
</template>

<script setup>
import { ref, computed } from 'vue';
const tab = ref(null);

const helados = [
    {
        nameHelado: 'Mix Frutas y bayas',
        imagen: 'https://cdn.pixabay.com/photo/2016/10/03/23/15/ice-1713160_1280.jpg',
        tab: 1
    },
    {
        nameHelado: 'Tentación Manjar',
        imagen: 'https://cdn.pixabay.com/photo/2016/10/31/18/14/dessert-1786311_1280.jpg',
        tab: 1
    },
    {
        nameHelado: 'Capuchino Vainilla',
        imagen: 'https://cdn.pixabay.com/photo/2019/11/23/20/04/coffee-4648041_1280.jpg',
        tab: 1
    },
    {
        nameHelado: 'Conos Chocolates',
        imagen: 'https://cdn.pixabay.com/photo/2019/08/12/13/45/ice-cream-4401300_1280.jpg',
        tab: 2
    },
    {
        nameHelado: 'Mix Primavera',
        imagen: 'https://cdn.pixabay.com/photo/2021/01/18/12/49/ice-cream-5928048_1280.jpg',
        tab: 2
    },
    {
        nameHelado: 'Verano Naranja',
        imagen: 'https://cdn.pixabay.com/photo/2017/04/04/18/11/ice-cream-2202605_1280.jpg',
        tab: 2
    },
    {
        nameHelado: 'Mango Natural',
        imagen: 'https://cdn.pixabay.com/photo/2016/06/27/18/16/popsicle-1482976_1280.jpg',
        tab: 3
    },
    {
        nameHelado: 'Pura Fruta',
        imagen: 'https://cdn.pixabay.com/photo/2017/05/11/19/41/ice-2305178_1280.jpg',
        tab: 3
    },
    {
        nameHelado: 'Chocolate Nuez',
        imagen: 'https://cdn.pixabay.com/photo/2017/11/30/08/56/ice-cream-2987955_1280.jpg',
        tab: 3
    },
];
const filterHelados = computed(() =>{
        return helados.filter(helado => helado.tab === tab.value)
    })


</script>

<style scoped>
    .img-title {
        height: 400px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        padding-left: 20px;
        padding-bottom: 20px;
        font-size: 32px;
        color: #e63f66;
        font-weight: 700;
    }

    
</style>