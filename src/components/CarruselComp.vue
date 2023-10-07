<template>
    <v-carousel
    cycle
    hide-delimiter-background
    show-arrows="hover">
        <v-carousel-item
        v-for="banner in banners" :key="banner.id"  :src="banner.url"></v-carousel-item>

    </v-carousel>
</template>

<script setup>
    const banners = [
        {
            id: 1,
            url: require('@/assets/img/banner/banner-1.png')
        },
        {
            id: 2,
            url: require('@/assets/img/banner/banner-2.png')
        },
        {
            id: 3,
            url: require('@/assets/img/banner/banner-3.png')
        },
    ]

</script>

<style scoped></style>