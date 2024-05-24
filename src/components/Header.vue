<template>
    <v-app-bar :elevation="2">
        <v-app-bar-title>Rick and Morty - {{ pageTitle }}</v-app-bar-title>
    </v-app-bar>
</template>

<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    
    const pageTitle = computed(() => {
        switch (route.name) {
            case 'home':
                return 'Home';
            case 'character':
                return 'Character Info';
        }
    });
</script>