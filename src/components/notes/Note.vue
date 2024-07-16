<template>
    <div class="card my-3">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
            </div>
            <div class="has-text-right has-text-grey-light">{{ characterLength }}</div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="`/edit/${note.id}`" class="card-footer-item">Edit</RouterLink>
            <a href="#" @click="storeNotes.deleteNote(note.id)" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script setup>
import { useNotesStore } from '@/stores/storeNotes';
import { computed, defineProps } from 'vue';
import { RouterLink } from 'vue-router';
const props = defineProps({
    note: {
        type: Object,
        required: true,
    },
});
const storeNotes = useNotesStore();

const characterLength = computed(() => {
    const length = props.note.content.length;
    const desc = length > 1 ? 'characters' : 'character';
    return `${length} ${desc}`;
});
</script>
