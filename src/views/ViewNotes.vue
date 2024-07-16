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
        <Note @on-delete-note="deleteNote" :note="note" class="notes" v-for="note in notes" :key="note.id" />
    </div>
</template>

<script setup>
import Note from '@/components/notes/Note.vue';
import { ref } from 'vue';

const noteInput = ref('');
const noteInputRef = ref(null);
const notes = ref([
    {
        id: 'id1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    },
    {
        id: 'id2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    },
    {
        id: 'id3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    },
]);

const addNote = () => {
    const currentTime = new Date().getTime();
    const id = currentTime.toString();

    const note = {
        id,
        content: noteInput.value.trim(),
    };

    notes.value.unshift(note);

    noteInput.value = '';
    noteInputRef.value.focus();
};

const deleteNote = (id) => {
    notes.value = notes.value.filter((item) => id !== item.id);
};
</script>
