<template>
    <div>
        <div class="card my-3">
            <div class="card-content">
                <div class="content">
                    {{ note.content }}
                </div>
                <div class="has-text-right has-text-grey-light">{{ characterLength }}</div>
            </div>
            <footer class="card-footer">
                <RouterLink :to="`/edit/${note.id}`" class="card-footer-item">Edit</RouterLink>
                <a href="#" class="card-footer-item" @click.prevent="showModalDelete = true">Delete</a>
            </footer>
        </div>
        <ModalDeleteNote :noteId="note.id" v-model="showModalDelete" v-if="showModalDelete" />
    </div>
</template>

<script setup>
import ModalDeleteNote from '@/components/notes/ModalDeleteNote.vue';
import { computed, defineProps, ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    note: {
        type: Object,
        required: true,
    },
});

const showModalDelete = ref(false);
const characterLength = computed(() => {
    const length = props.note.content.length;
    const desc = length > 1 ? 'characters' : 'character';
    return `${length} ${desc}`;
});
</script>
