<template>
    <div>
        <v-navigation-drawer temporary location="left" absolute app v-model="drawer" color="#faa7d3">
            <v-layout class="mt-4 d-flex flex-column text-center">
                <div class="d-flex justify-center">
                    <v-img
                        :max-width="180"
                        aspect-ratio="1/1"
                        cover
                        :src=imagenLogo
                    ></v-img>
                </div>
                <div class="pb-12">
                    <h3 class="title-fonts">Dulcinea</h3>
                    <p class="sub-title-fonts">Ice Creams</p>
                </div>
            </v-layout>
            <v-list>

                <v-list-item v-for="(item, i) in itemsNav" :key="i" :value="item" color="primary" :to="item.to">
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>

                    <v-list-item-title v-text="item.name" class="sub-titulo"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark prominent color="#c0165b" elevation="4">
            <v-app-bar-nav-icon size="60" @click="drawer = !drawer" color="#fbcfe8">

            </v-app-bar-nav-icon>
            
            <v-toolbar-title class="title-fonts d-flex justify-center">
                Dulcinea Ice Creams
            </v-toolbar-title>
        </v-toolbar>
        
    </div>
</template>

<script setup>
import { ref } from 'vue';
    const imagenLogo = require('@/assets/img/logo.png')
    const drawer = ref(false);
    const itemsNav = [
        {
            name: 'Home',
            icon: 'mdi-home',
            to: '/'
        },
        {
            name: 'Productos',
            icon: 'mdi-ice-cream',
            to: {
                name: 'products'
            }
        },
        {
            name: 'Contacto',
            icon: 'mdi-account-box'
            //to: "/contacto"
        },
        {
            name: 'Acerca',
            icon: 'mdi-account'
            //to: '/acerca'
        },
    ]
</script>

<style scoped>

.title-fonts{
    font-family: 'Dancing Script', cursive;
    font-size: 30px;
}
.sub-title-fonts{
    font-family: 'Dancing Script', cursive;
    font-size: 16px;
}

</style>