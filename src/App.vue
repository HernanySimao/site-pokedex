<script setup>
import HomeLayout from "./components/Home/Layout.vue";
import HomeDetails from "./components/Home/Details.vue";

import { useIdStore } from "./stores/useIdStore";
import { useCustomFetch } from "./composables/useCustomFetch";
import { useGetNumber } from "./composables/useGetNumber";
import { onMounted, ref, watch } from "vue";

const idStore = useIdStore();
const pokemonData = ref([]);
const pokemon = ref(null);
const pokemonEvaluation = ref(null);
const evaluation = ref(null);

onMounted(async () => {
  try {
    const data = await useCustomFetch("pokemon/?limit=10&offset=0");
    pokemonData.value = data?.results;
  } catch (error) {
    console.error(error);
  }
});

const get = async () => {
  try {
    const data = await useCustomFetch(`pokemon/${idStore?.selectedId}`);
    pokemon.value = data;
  } catch (error) {
    console.error(error);
  }
};
const getEvaluation = async () => {
  try {
    const data = await useCustomFetch(`pokemon-species/${idStore?.selectedId}`);
    pokemonEvaluation.value = data?.evolution_chain.url;
    evaluation.value = await useCustomFetch(
      `evolution-chain/${useGetNumber(pokemonEvaluation.value)}`
    );
  } catch (error) {
    console.error(error);
  }
};

watch(
  () => idStore?.selectedId,
  () => {
    get();
    getEvaluation();
  }
);
</script>

<template>
  <div>
    <HomeLayout :data="pokemonData">
      <HomeDetails
        :data="pokemon"
        :id="idStore?.selectedId"
        :evaluation="evaluation"
      />
    </HomeLayout>
  </div>
</template>

<style lang="sass">
@import "./assets/sass/main.sass"
</style>
