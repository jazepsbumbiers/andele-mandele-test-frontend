<template>
    <v-card
        class="mx-auto"
        max-width="400"
        max-height="400"
    >
        <div class="d-flex justify-content-center">
            <v-img
                class="align-center"
                height="200"
                width="300"
                :src="character.image"
                :alt="character.name"
                cover
            />
        </div>

        <v-card-title class="text-wrap">
            {{ character.name }}
            <v-icon icon="mdi-information-outline" size="x-large" style="cursor: pointer;" @click="navigateToRoute(`/character/${character.id}`)"></v-icon> 
        </v-card-title>
    </v-card>
</template>

<script setup>
    import { useRouter } from 'vue-router';

    const props = defineProps({
        character: {
            type: Object,
            required: true,
        },
    });

    const router = useRouter();

    const navigateToRoute = (path) => {
        router.push(path);
    };
</script>