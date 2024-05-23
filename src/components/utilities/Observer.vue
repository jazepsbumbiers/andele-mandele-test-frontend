<template>
    <div ref="observerRef" />
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';

    const props = defineProps({
        options: {
            type: Object,
            default: () => ({}),
        },
    });

    const emit = defineEmits(['intersected']);

    const observerRef = ref(null);
    let observer = null;

    const handleIntersect = ([entry]) => {
        if (entry && entry.isIntersecting) {
            emit('intersected');
        }
    };

    onMounted(() => {
        observer = new IntersectionObserver(handleIntersect, props.options);
        if (observerRef.value) {
            observer.observe(observerRef.value);
        }
    });

    onBeforeUnmount(() => {
        if (observer && observerRef.value) {
            observer.unobserve(observerRef.value);
        }
    });
</script>
