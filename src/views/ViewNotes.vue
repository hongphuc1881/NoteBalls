<template>
    <div>
        <div class="has-background-grey-light p-3 mt-3 is-rounded">
            <div class="field">
                <div class="control">
                    <textarea
                        v-model="noteInput"
                        ref="noteInputRef"
                        class="textarea"
                        type="text"
                        placeholder="Text input"
                    >
                    </textarea>
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link" @click="addNote" :disabled="!noteInput.trim().length">Add</button>
                </div>
            </div>
        </div>
        <Note :note="note" class="notes" v-for="note in storeNotes.notes" :key="note.id" />
    </div>
</template>

<script setup>
import Note from '@/components/notes/Note.vue';
import { useNotesStore } from '@/stores/storeNotes';
import { ref } from 'vue';

const noteInput = ref('');
const noteInputRef = ref(null);

const storeNotes = useNotesStore();
const addNote = () => {
    storeNotes.addNote(noteInput.value.trim());

    noteInput.value = '';
    noteInputRef.value.focus();
};
</script>
