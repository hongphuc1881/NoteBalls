import ViewEditNote from '@/views/ViewEditNote.vue';
import ViewNotes from '@/views/ViewNotes.vue';
import ViewStats from '@/views/ViewStats.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'notes',
            component: ViewNotes,
        },
        {
            path: '/stats',
            name: 'stat',
            component: ViewStats,
        },
        {
            path: '/edit/:id',
            name: 'edit note',
            component: ViewEditNote,
        },
    ],
});

export default router;
