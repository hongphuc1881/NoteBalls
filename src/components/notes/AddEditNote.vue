<template>
    <div class="has-background-grey-light p-3 mt-3 is-rounded">
        <div class="field">
            <div v-if="label" class="has-text-white mb-3">{{ label }}</div>
            <div class="control">
                <textarea
                    :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                    class="textarea"
                    type="text"
                    :placeholder="placeholder"
                    ref="textareaRef"
                    v-autofocus
                >
                </textarea>
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <slot name="buttons"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus';
import { ref } from 'vue';
const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    label: {
        type: String,
    },
    placeholder: {
        type: String,
        required: true,
    },
});
const textareaRef = ref(null);

const focusTextarea = () => {
    textareaRef.value.focus();
};

defineExpose({
    focusTextarea,
});

const emit = defineEmits(['update:modelValue']);
</script>
