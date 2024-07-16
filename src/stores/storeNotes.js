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
    },
});
