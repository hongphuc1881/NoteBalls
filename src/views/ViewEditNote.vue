<template>
    <AddEditNote v-model="noteContent" ref="noteInputRef" label="Edit Note" placeholder="">
        <template #buttons>
            <button class="button mr-2" @click="$router.push('/')">Cancel</button>
            <button class="button is-link" :disabled="!noteContent.trim().length" @click="updateNote">Save</button>
        </template>
    </AddEditNote>
</template>

<script setup>
import AddEditNote from '@/components/notes/AddEditNote.vue';
import router from '@/router';
import { useNotesStore } from '@/stores/storeNotes';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const storeNotes = useNotesStore();
const noteContent = ref('');
const route = useRoute();

const id = route.params.id;

noteContent.value = storeNotes.getContentNoteDetail(id);

const updateNote = () => {
    storeNotes.updateNote(id, noteContent.value.trim());
    router.push('/');
};
</script>
