import router from '@/router';
import { defineStore } from 'pinia';

export const useNotesStore = defineStore('counter', {
    state: () => ({
        notes: [
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
        ],
    }),

    actions: {
        addNote(content) {
            const currentTime = new Date().getTime();
            const id = currentTime.toString();

            const note = {
                id,
                content,
            };

            this.notes.unshift(note);
        },
        deleteNote(id) {
            this.notes = this.notes.filter((item) => item.id !== id);
        },
        updateNote(id, content) {
            const index = this.notes.findIndex((item) => item.id == id);
            this.notes[index].content = content;
        },
    },
    getters: {
        getContentNoteDetail: (state) => {
            return (id) => {
                const found = state.notes.find((note) => note.id == id);

                return found ? found.content : router.push('/pagenotfound');
            };
        },

        getTotalNotesCount: (state) => state.notes.length,
        getTotalCharacter: (state) =>
            state.notes.reduce((acc, item) => {
                return (acc += item.content.length);
            }, 0),
    },
});
