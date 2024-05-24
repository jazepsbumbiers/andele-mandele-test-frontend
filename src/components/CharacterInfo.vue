<template>
    <div class="container">
        <v-card class="mx-auto" max-width="500" max-height="800" elevation="10">
            <v-img
                class="align-center"
                height="400"
                width="500"
                :src="character.image"
                :alt="character.name"
                cover
            />

            <v-card-title class="text-wrap">
                {{ character.name }}
            </v-card-title>

            <v-card-text>
                <div>Gender: {{ character.gender }}</div>
                <div>Status: {{ character.status }}</div>
                <div>Species: {{ character.species }}</div>
                <div>Origin: {{ character.origin?.name }}</div>
                <div>Location: {{ character.location?.name }}</div>
                <div>Episodes: {{ episodeNumbers }}</div>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    rounded="xl" 
                    size="x-large" 
                    prepend-icon="mdi-arrow-left" 
                    color="primary" 
                    @click="$router.push('/')"
                >
                    Back
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup>
    import { onMounted, reactive, computed } from 'vue';
    import { useRequest } from '@/composables/request.js';

    const props = defineProps({
        id: {
            type: Number,
            required: true,
        },
    });

    const character = reactive({
        name: '',
        gender: '',
        status: '',
        species: '',
        origin: {},
        location: {},
        image: ''
    });

    const episodeNumbers = computed(() => {
        if (!character.episode) {
            return '';
        }

        return character.episode
            .map(url => url.split('/').pop())
            .join(', ');
    });

    const getCharacter = async () => {
        const { response } = await useRequest(`http://127.0.0.1:8000/api/characters/${props.id}`);
        Object.assign(character, response.data);
    };

    onMounted(async () => {
        await getCharacter();
    });
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>
