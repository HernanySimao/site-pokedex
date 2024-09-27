<script setup>
import HomeLayout from "./components/Home/Layout.vue";
import HomeDetails from "./components/Home/Details.vue";

import { useCustomFetch } from "./composables/useCustomFetch";
import { onMounted, ref } from "vue";

const pokemonData = ref(null);
onMounted(async () => {
  try {
    const data = await useCustomFetch("pokemon/?limit=10&offset=20");
    pokemonData.value = data?.results;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div>
    <HomeLayout :data="pokemonData">
      <HomeDetails> </HomeDetails>
    </HomeLayout>
  </div>
</template>

<style lang="sass">
@import "./assets/sass/main.sass"
</style>
