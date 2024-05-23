<template>
    <v-app-bar :elevation="2">
        <v-app-bar-title>AndeleMandele test task - {{ pageTitle }}</v-app-bar-title>
    </v-app-bar>
</template>

<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    
    const pageTitle = computed(() => {
        switch (route.name) {
            case 'home':
                return `Home`;
        }
    });
</script>