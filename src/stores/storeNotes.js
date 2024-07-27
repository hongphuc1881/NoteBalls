import { db } from '@/js/firebase';
import router from '@/router';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore';
import { defineStore } from 'pinia';
const noteCollection = collection(db, 'notes');
const noteCollectionQuery = query(noteCollection, orderBy('date', 'desc'));

export const useNotesStore = defineStore('counter', {
    state: () => ({
        notes: [],
    }),

    actions: {
        async getNotes() {
            //Get data real time
            onSnapshot(noteCollectionQuery, (querySnapshot) => {
                const newNote = [];
                querySnapshot.forEach((doc) => {
                    const note = {
                        id: doc.id,
                        date: doc.data().date,
                        content: doc.data().content,
                    };
                    newNote.push(note);
                });

                this.notes = [...newNote];
            });
        },
        async addNote(content) {
            const currentTime = new Date().getTime();
            const date = currentTime.toString();
            await addDoc(noteCollection, {
                date,
                content,
            });
        },
        async deleteNote(id) {
            await deleteDoc(doc(noteCollection, id));
        },
        async updateNote(id, content) {
            await updateDoc(doc(noteCollection, id), {
                content,
            });
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
