<template>
    <div class="card my-3">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
            </div>
            <div class="has-text-right has-text-grey-light">{{ characterLength }}</div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" @click="deleteNote(note.id)" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
const emit = defineEmits(['onDeleteNote']);
const props = defineProps({
    note: {
        type: Object,
        required: true,
    },
});

const characterLength = computed(() => {
    const length = props.note.content.length;
    const desc = length > 1 ? 'characters' : 'character';
    return `${length} ${desc}`;
});

const deleteNote = (id) => {
    emit('onDeleteNote', id);
};
</script>
