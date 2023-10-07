<template>
   <v-container>
    <v-row>
        <v-col v-for="helado in helados" :key="helado.key" class="d-flex child-flex" cols="4">
            <v-img :src="helado.src.original"
                :lazy-src="helado.src.original" aspect-ratio="1" cover
                class="bg-grey-lighten-2">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-col>
    </v-row>
   </v-container>
</template>

<script setup>

import GetService from "@/services/GetServices"
import { onMounted } from "vue";


const service = new GetService();
const helados = service.getHelado();
onMounted(async () => {
    await service.fetchAll()
})

</script>

<style scoped></style>