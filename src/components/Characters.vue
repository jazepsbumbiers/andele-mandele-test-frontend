<template>
    <v-container class="mt-3">
        <v-row
            v-if="characters.length"
            align="center"
            justify="center"
            no-gutters
        >
            <v-col
                v-for="character in characters"
                :key="character.id"
                cols="auto"
                class="mx-2 my-2"
            >
                <Character :character="character" />
            </v-col>
        </v-row>
 
        <v-row
            v-else
            align="center"
            justify="center"
            no-gutters
        >
            <v-icon icon="mdi-close-circle" size="x-large" class="mx-2"></v-icon> 
            <b>{{ noItemsText }}</b>
        </v-row>

        <Observer @intersected="getCharacters"/>
    </v-container>

    <v-overlay
        :model-value="loading"
        class="align-center justify-center"
    >
        <v-progress-circular
            color="primary"
            size="64"
            indeterminate
        />
    </v-overlay>
</template>

<script setup>
    import { useRequest } from '@/composables/request.js';
    import { ref } from 'vue';
    import Character from '@/components/Character.vue'; 

    const characters = ref([]);
    const noItemsText = ref('No characters found.');
    const page = ref(1);
    const loading = ref(false);

    const getCharacters = async () => {
        loading.value = true;

        const { response } = await useRequest('http://127.0.0.1:8000/api/characters', { params: { page: page.value } });

        loading.value = false;

        page.value++;

        characters.value = [...characters.value, ...response.data?.results ?? []];
    };
</script>
