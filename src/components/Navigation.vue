<template>
    <v-bottom-navigation
        color="primary"
        horizontal
    >
        <v-btn value="home" @click="navigateToRoute('/')">
            <v-icon icon="mdi-home-account" size="x-large"></v-icon>

            <span class="mt-2">
                Home
            </span>
        </v-btn>
    </v-bottom-navigation>
</template>

<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const navigateToRoute = (path) => {
        router.push(path);
    };
</script>
