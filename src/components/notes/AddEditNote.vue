<template>
    <div class="has-background-grey-light p-3 mt-3 is-rounded">
        <div class="field">
            <div class="control">
                <textarea
                    ref="textareaRef"
                    :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                    class="textarea"
                    type="text"
                    placeholder="Text input"
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
import { ref } from 'vue';

const textareaRef = ref(null);
const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);

const focusTextarea = () => {
    textareaRef.value.focus();
};

defineExpose({
    focusTextarea,
});
</script>
