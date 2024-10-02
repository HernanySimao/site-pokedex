<script setup>
import AOS from "aos";
import { onMounted } from "vue";
import { useGetNumber } from "../../../composables/useGetNumber";
import { useGetTypeColor } from "../../../composables/useGetTypeColor";

import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  evaluation: {
    type: Object,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const { getTypeColor } = useGetTypeColor();

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

onMounted(() => {
  AOS.refresh();
});
</script>

<script>
export default {
  name: "HomeDetails",
};
</script>

<template>
  <section>
    <div class="container" data-aos="fade-left">
      <div class="row">
        <div class="card">
          <div v-if="data" class="card-body text-center">
            <div class="mb-4" data-aos="fade-left">
              <img class="pokemon" :src="image + id + '.svg'" :alt="id" />
            </div>
            <span>#{{ id }} </span>

            <h1>{{ $t("home.details.statistics") }}</h1>
            <div
              data-aos="fade-right"
              class="d-flex justify-content-center flex-wrap text-center mb-5"
            >
              <div
                class="stats col-md-4"
                v-for="(status, i) in data?.stats"
                :key="i"
              >
                <span class="text-uppercase">
                  {{ status?.stat?.name }} » {{ status?.base_stat }}
                </span>
              </div>
            </div>

            <h1>{{ $t("home.details.types") }}</h1>
            <div class="d-flex justify-content-center flex-wrap mb-5">
              <div
                data-aos="fade-left"
                class="types text-white col-md-3"
                v-for="(type, i) in data?.types"
                :key="i"
                :style="{ 'background-color': getTypeColor(type?.type?.name) }"
              >
                <span class="text-capitalize">
                  {{ type?.type?.name }}
                </span>
              </div>
            </div>

            <h1 class="mb-4">{{ $t("home.details.evolutions") }}</h1>
            <div class="d-flex justify-content-center flex-wrap">
              <div
                data-aos="fade-left"
                class="col-md-3 align-items-center"
                v-for="(evolution, i) in getEvolutions(evaluation?.chain)"
                :key="i"
              >
                <div>
                  <img
                    class="evolution"
                    :src="image + useGetNumber(evolution?.url) + '.svg'"
                    :alt="evolution?.url"
                  />
                  <span class="text-capitalize">{{ evolution?.name }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center p-5 mt-5 mb-5" v-else>
            <span>{{ $t("home.details.selected") }} </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import "../../../assets/sass/variables"

.pokemon
  width: 150px
  height: 100%

.evolution
  width: 100px
  height: 100px
  object-fit: contain

.stats
  background: #f5f5f5
  border-radius: 18px
  margin: 5px
  padding: 10px 2px
  font-size: 13px
  &:hover
    background-color: $primary-theme-color
    color: #fff
.types
  border-radius: 18px
  margin: 2px
  padding: 13px 2px
  font-size: 13px
</style>
