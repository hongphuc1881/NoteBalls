<script setup>
import Navbar from '@/components/layouts/Navbar.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const showNavbar = computed(() => {
    return !route.meta.hideNavbar;
});

console.log;
</script>

<template>
    <Navbar v-if="!$route.meta.hideNavbar" />
    <main class="container is-max-desktop px-2">
        <RouterView />
    </main>
</template>

<style>
@import 'bulma/css/bulma.min.css';
</style>
