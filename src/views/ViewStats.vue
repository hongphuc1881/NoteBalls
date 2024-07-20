<template>
    <div>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of notes</td>
                    <td>{{ storeNotes.getTotalNotesCount }}</td>
                </tr>
                <tr>
                    <td>Number of character (all of notes)</td>
                    <td>{{ storeNotes.getTotalCharacter }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useNotesStore } from '@/stores/storeNotes';

const storeNotes = useNotesStore();
</script>
