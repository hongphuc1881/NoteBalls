<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop px-2">
            <div class="navbar-brand">
                <RouterLink to="/" class="navbar-item has-text-white is-size-3 is-family-monospace"
                    >NoteBalls</RouterLink
                >

                <a
                    role="button"
                    class="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                    @click="onToggleMobileNav"
                    ref="mobileNavRef"
                    :class="{ 'is-active': showMobileNav }"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileNav }">
                <div class="navbar-end">
                    <RouterLink @click="showMobileNav = false" to="/" class="navbar-item" active-class="is-active"
                        >Notes</RouterLink
                    >
                    <RouterLink @click="showMobileNav = false" to="/stats" class="navbar-item" active-class="is-active">
                        Stats</RouterLink
                    >
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';

const showMobileNav = ref(false);
const mobileNavRef = ref(null);
const onToggleMobileNav = computed(() => {
    showMobileNav.value = !showMobileNav.value;
});

onClickOutside(mobileNavRef, () => (showMobileNav.value = false));
</script>
