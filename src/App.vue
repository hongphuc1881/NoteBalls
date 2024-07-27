<script setup>
import Navbar from '@/components/layouts/Navbar.vue';
import { onMounted } from 'vue';
import { useNotesStore } from './stores/storeNotes';
const noteStores = useNotesStore();
onMounted(() => {
    noteStores.getNotes();
});
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
