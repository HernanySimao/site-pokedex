<script setup>
import { useGetNumber } from "../../composables/useGetNumber";
import { getTypeColor } from "../../composables/useGetTypeColor";

const { evaluation } = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => [],
  },
  evaluation: {
    type: Object,
    required: true,
    default: () => [],
  },
  id: {
    type: String,
    required: true,
    default: () => [],
  },
});

const image = import.meta.env.VITE_URL_ASSET;
const getEvolutions = (evolutionChain, evolutions = []) => {
  evolutions.push({
    name: evolutionChain?.species?.name,
    url: evolutionChain?.species?.url,
  });

  if (evolutionChain?.evolves_to && evolutionChain?.evolves_to.length > 0) {
    evolutionChain.evolves_to.forEach((evolution) => {
      getEvolutions(evolution, evolutions);
    });
  }

  return evolutions;
};
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="card">
          <div class="card-body text-center">
            <div><img :src="image + id + '.svg'" alt="" /></div>
            <span>Nº {{ id }} </span>

            <h1>Estatísticas</h1>
            <div
              class="d-flex justify-content-center flex-wrap text-center mb-5"
            >
              <div
                class="stats col-md-3"
                v-for="(status, i) in data?.stats"
                :key="i"
              >
                <span class="text-capitalize">
                  {{ status?.stat?.name }} {{ status?.base_stat }}
                </span>
              </div>
            </div>

            <h1>Tipos</h1>

            <div class="d-flex justify-content-center flex-wrap mb-5">
              <div
                class="stats col-md-3"
                v-for="(type, i) in data?.types"
                :key="i"
                :style="{
                  'background-color': getTypeColor(type?.type?.name),
                }"
              >
                <span class="text-capitalize">
                  {{ type?.type?.name }} {{ getTypeColor(type?.type?.name) }}
                </span>
              </div>
            </div>

            <h1 class="mb-4">Evoluções</h1>

            <div class="d-flex justify-content-center flex-wrap">
              <div
                class="col-md-3 align-items-center"
                v-for="(evolution, i) in getEvolutions(evaluation?.chain)"
                :key="i"
              >
                <div v-if="id != useGetNumber(evolution?.url)">
                  <img
                    class="evolution"
                    :src="image + useGetNumber(evolution?.url) + '.svg'"
                    :alt="evolution?.url"
                  />
                  <span class="text-capitalize">
                    {{ evolution?.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.evolution
  width: 100px
  height: 100px
  object-fit: contain

.stats
  border: 1px solid #8EB0FF
  border-radius: 18px
  margin: 2px
  padding: 13px 2px
  font-size: 13px
</style>
