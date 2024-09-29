<script setup lang="ts">
import HomeLayout from "../components/Home/Layout.vue";
import HomeDetails from "../components/Home/Details/index.vue";
import HomeDetailsMobile from "../components/Home/Details/Mobile.vue";

import { Pokemon, EvolutionChain } from "../interfaces/Ipokemon";

import { useIdStore } from "../stores/useIdStore";
import { useCustomFetch } from "../composables/useCustomFetch";
import { useGetNumber } from "../composables/useGetNumber";
import { ref, watch } from "vue";

const idStore = useIdStore();
const pokemonData = ref<Pokemon[]>([]);
const pokemon = ref<Pokemon | null>(null);
const pokemonEvaluation = ref<string | null>(null);
const evaluation = ref<EvolutionChain | null>(null);

const get = async (): Promise<void> => {
  try {
    const data = await useCustomFetch<Pokemon>(
      `pokemon/${idStore?.selectedId}`
    );
    pokemon.value = data;
  } catch (error) {
    console.error(error);
  }
};

const getEvaluation = async (): Promise<void> => {
  try {
    const data = await useCustomFetch<{ evolution_chain: { url: string } }>(
      `pokemon-species/${idStore?.selectedId}`
    );
    pokemonEvaluation.value = data?.evolution_chain.url;

    if (pokemonEvaluation.value) {
      evaluation.value = await useCustomFetch<EvolutionChain>(
        `evolution-chain/${useGetNumber(pokemonEvaluation.value)}`
      );
    }
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
    <HomeLayout>
      <HomeDetailsMobile
        class="d-inline-block d-md-none"
        :data="pokemon"
        :id="idStore?.selectedId"
        :evaluation="evaluation"
      />
      <HomeDetails
        class="d-none d-md-inline"
        :data="pokemon"
        :id="idStore?.selectedId"
        :evaluation="evaluation"
      />
    </HomeLayout>
  </div>
</template>

<style lang="sass">
@import "../assets/sass/main.sass"
</style>
