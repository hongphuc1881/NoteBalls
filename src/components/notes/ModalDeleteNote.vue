<template>
    <div class="modal" :class="{ 'is-active': modelValue }">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete note</p>
                <button @click="closeModal" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">Are you sure you want to delete this note?</section>
            <footer class="modal-card-foot is-justify-content-flex-end">
                <div class="buttons">
                    <button @click="storeNotes.deleteNote(noteId)" class="button is-danger">Delete</button>
                    <button @click="closeModal" class="button">Cancel</button>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { useNotesStore } from '@/stores/storeNotes';
import { onMounted, onUnmounted } from 'vue';

const storeNotes = useNotesStore();
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    noteId: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
    emit('update:modelValue', false);
};

const handleKeyBoard = (e) => {
    if (e.key === 'Escape') closeModal();
};

onMounted(() => {
    document.addEventListener('keydown', handleKeyBoard);
});

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyBoard);
});
</script>
