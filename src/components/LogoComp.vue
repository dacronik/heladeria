<template>
    <v-img
        :max-width="props.width"
        aspect-ratio="1/1"
        cover
        :src=imagenLogo
        class="d-flex justify-center"
    ></v-img>
</template>

<script setup>
import { defineProps } from 'vue';

const imagenLogo = require('@/assets/img/logo.png')

const props = defineProps({
    width:{
        type: Number,
        require:true
    },
    
})
</script>

<style scoped>
    
</style>