<script setup>
import HomeLayout from "../components/Home/Layout.vue";
import HomeDetails from "../components/Home/Details/index.vue";
import HomeDetailsMobile from "../components/Home/Details/Mobile.vue";
import Menu from "../layouts/Menu.vue";

import { useIdStore } from "../stores/useIdStore";
import { useCustomFetch } from "../composables/useCustomFetch";
import { useGetNumber } from "../composables/useGetNumber";
import { onMounted, ref, watch } from "vue";

const idStore = useIdStore();
const pokemonData = ref([]);
const pokemon = ref(null);
const pokemonEvaluation = ref(null);
const evaluation = ref(null);

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
    <Menu>
      <HomeLayout>
        <HomeDetails
          class="d-none d-md-inline"
          :data="pokemon"
          :id="idStore?.selectedId"
          :evaluation="evaluation"
        />
        <HomeDetailsMobile
          class="d-inline-block d-md-none"
          :data="pokemon"
          :id="idStore?.selectedId"
          :evaluation="evaluation"
        />
      </HomeLayout>
    </Menu>
  </div>
</template>

<style lang="sass">
@import "../assets/sass/main.sass"
</style>
