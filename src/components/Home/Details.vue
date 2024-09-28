<script setup>
import { useGetNumber } from "../../composables/useGetNumber";

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
        <div class="card text-center">
          <div class="card-body">
            <div><img :src="image + id + '.svg'" alt="" /></div>
            <span>Nº {{ id }} </span>

            <div v-if="false" class="d-flex justify-content-center flex-wrap">
              <div
                class="stats col-md-3"
                v-for="(status, i) in data.stats"
                :key="i"
              >
                <span class="text-capitalize">
                  {{ status.stat.name }} {{ status.base_stat }}
                </span>
              </div>
            </div>

            <div v-if="false" class="d-flex justify-content-center flex-wrap">
              <div
                class="stats col-md-3"
                v-for="(type, i) in data.types"
                :key="i"
              >
                <span class="text-capitalize">
                  {{ type.type.name }}
                </span>
              </div>
            </div>

            {{ evaluation?.chain?.species?.name }}
            <div class="d-flex justify-content-center flex-wrap">
              <div
                class="stats col-md-3"
                v-for="(evolution, i) in getEvolutions(evaluation?.chain)"
                :key="i"
              >
                <img
                  :src="image + useGetNumber(evolution?.url) + '.svg'"
                  alt=""
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
  </section>
</template>

<style lang="sass" scoped>
.stats
  border: 1px solid #8EB0FF
  border-radius: 18px
  margin: 2px
  padding: 13px 2px
  font-size: 13px
</style>
