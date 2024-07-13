<script setup>
import Navbar from '@/components/layouts/Navbar.vue';
</script>

<template>
    <Navbar />
    <main class="container is-max-desktop px-2">
        <RouterView />
    </main>
</template>

<style>
@import 'bulma/css/bulma.min.css';
</style>
