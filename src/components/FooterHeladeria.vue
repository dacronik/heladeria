<template>
    <v-footer class="text-center d-flex flex-column" color="#c0165b">
        <div>
            <h3 class="footer-title">Síguenos en Nuestras Redes</h3>
        </div>
        <div>
            <v-hover>
                <v-btn v-for="icon in icons" :key="icon" class="mx-4" variant="text" size="60" elevation="4" rounded :style="{'background': icon.bgColor}">
                    <FontAwesomeIcon :icon="icon.redSocial" size="2xl"></FontAwesomeIcon>
                </v-btn>
            </v-hover>
        </div>

        <v-row d-flex justify="center" justify-sm="center">
            <v-col cols="12" md="2" class="d-flex justify-center">
                <!-- <v-img :max-width="220" aspect-ratio="1/1" cover :src=imagenLogo></v-img> -->
                <LogoComp width="220"/>
            </v-col>
            <v-col d-flex align-self="center" cols="12" md="8">
                <div>
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
                    Praesent ut
                    risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit
                    amet dui.
                    Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
                    ultrices,
                    cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius
                    natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>
            </v-col>
        </v-row>

        <v-divider></v-divider>

        <div>
            {{ new Date().getFullYear() }} — <strong>Creado por Gerardo Ortiz </strong>
        </div>
    </v-footer>
</template>

<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faXTwitter, faFacebook,faInstagram,faTiktok } from '@fortawesome/free-brands-svg-icons'
    import LogoComp from './LogoComp.vue';
    // const imagenLogo = require('@/assets/img/logo.png')


    const icons = [
            {
                redSocial: faFacebook,
                bgColor: '#4267B2'
            },
            {
                redSocial: faXTwitter,
                bgColor: '#14171A'
            },
            {
                redSocial: faInstagram,
                bgColor: 'linear-gradient(to bottom, #c0392b, #8e44ad)'
            },
            {
                redSocial: faTiktok,
                bgColor: '#14171A'
            }
            
        
        
        
        
        
    ]
</script>

<style scoped>
    .footer-title {
        font-family: 'Dancing Script', cursive;
        font-size: 40px;
        padding: 20px;
    }
</style>