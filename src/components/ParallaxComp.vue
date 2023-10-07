<template>
    <v-parallax src="../assets/img/heladeria_fondo.jpg">
        <div class="d-flex fill-height justify-center align-center text-white">
            
            <v-card height="600" width="1200"  class="text-center" :class="{ 'overflow-auto': isMobile}">
                <span class="card-parallax">Nuestros Productos</span>
                    <TabsComp />
            </v-card>
        </div>
    </v-parallax>
</template>

<script setup>
import  TabsComp from "@/components/TabsComp.vue"
import { ref, onMounted } from "vue";

const isMobile = ref(false);

onMounted(()=>{
    isMobile.value = window.innerWidth <=600
})

window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth <= 600
})
</script>

<style scoped>
    .card-parallax {
        font-family: 'Dancing Script', cursive;
        font-size: 60px;
        font-weight: 700;
    }
    .overflow-auto {
        overflow-x: auto;
        white-space: nowrap;
    }
</style>