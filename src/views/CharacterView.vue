<template>
    <Header />

    <CharacterInfo :id="parseInt($route.params.id)" />

    <Navigation />
</template>

<script setup>
    import Header from '@/components/Header.vue';
    import Navigation from '@/components/Navigation.vue';
    import CharacterInfo from '@/components/CharacterInfo.vue';
</script>
