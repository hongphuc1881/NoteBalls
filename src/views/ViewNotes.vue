<template>
    <div>
        <AddEditNote v-model="noteInput" ref="noteInputRef" placeholder="Add new note">
            <template #buttons>
                <button class="button is-link" @click="addNote" :disabled="!noteInput.trim().length">Add</button>
            </template>
        </AddEditNote>
        <Note :note="note" class="notes" v-for="note in storeNotes.notes" :key="note.id" />
    </div>
</template>

<script setup>
import AddEditNote from '@/components/notes/AddEditNote.vue';
import Note from '@/components/notes/Note.vue';
import { useNotesStore } from '@/stores/storeNotes';
import { ref } from 'vue';

const noteInput = ref('');
const noteInputRef = ref(null);

const storeNotes = useNotesStore();
const addNote = () => {
    storeNotes.addNote(noteInput.value.trim());

    noteInput.value = '';
    noteInputRef.value.focusTextarea();
};
</script>
