<script setup>
import { ref, computed, onMounted } from "vue";
import HomeCard from "./Card.vue";
import { useGetNumber } from "../../composables/useGetNumber";
import { useCustomFetch } from "../../composables/useCustomFetch";

const { data } = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const pokemons = ref([]);
const fetchInitialPokemons = async () => {
  try {
    const response = await useCustomFetch("pokemon?limit=10");
    pokemons.value = response.results.map((p) => ({
      name: p.name,
      url: p.url,
    }));
  } catch (error) {
    console.error("Erro ao buscar lista inicial de Pokémon:", error);
  }
};

const types = ref([]);
const selectedType = ref("");

const fetchTypes = async () => {
  try {
    const response = await useCustomFetch("type/");
    types.value = response.results;
  } catch (error) {
    console.error("Erro ao buscar tipos:", error);
  }
};

const fetchPokemonsByType = async () => {
  if (selectedType.value) {
    const selectedTypeObj = types.value.find(
      (type) => type.name === selectedType.value
    );
    if (selectedTypeObj) {
      try {
        const response = await useCustomFetch(
          `type/${useGetNumber(selectedTypeObj.url)}`
        );
        pokemons.value = response.pokemon.slice(0, 10).map((p) => ({
          name: p.pokemon.name,
          url: p.pokemon.url,
        }));
      } catch (error) {
        console.error("Erro ao buscar Pokémon por tipo:", error);
      }
    }
  } else {
    fetchInitialPokemons();
  }
};

onMounted(() => {
  fetchTypes();
  fetchInitialPokemons();
});

const searchType = ref(1);
const searchQuery = ref("");

const filteredData = computed(() => {
  return pokemons.value.filter((item) => {
    const number = useGetNumber(item.url);

    if (searchType.value === 1) {
      return item.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    } else if (searchType.value === 2) {
      return number && number.includes(searchQuery.value);
    }

    return true;
  });
});
</script>

<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-7 mb-5">
          <div class="position-relative">
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="`Pesquisar por ${
                searchType == 1 ? 'Nome' : 'Número'
              }`"
              class="form-control"
            />
            <img
              class="position-absolute icon"
              src="/image/browser.png"
              alt="Ícone de pesquisa"
            />
          </div>

          <div class="row mt-4">
            <div
              v-for="type in [
                { id: 1, name: 'Nome' },
                { id: 2, name: 'Número' },
              ]"
              :key="type.id"
              class="col-md-3 mt-4 ms-3 cursor-pointer"
            >
              <div
                @click="searchType = type.id"
                class="card text-center"
                :class="{ active: searchType == type.id }"
              >
                <div class="card-body">
                  <span>{{ type.name }}</span>
                </div>
              </div>
            </div>

            <div class="col-md-3 mt-4 ms-3">
              <select
                v-model="selectedType"
                @change="fetchPokemonsByType"
                class="form-select text-capitalize"
              >
                <option selected disabled value="">Selecionar Tipo</option>
                <option
                  v-for="type in types.slice(0, -1)"
                  :key="type.name"
                  :value="type.name"
                >
                  {{ type.name }}
                </option>
              </select>
            </div>
          </div>

          <HomeCard
            v-if="filteredData.length"
            :data="filteredData"
            class="mt-5"
          />
          <div class="text-center mt-5 mb-5 p-5" v-else>
            <span>Não encontramos nada, tente novamente</span>
          </div>
        </div>

        <div class="col-md-5">
          <main>
            <slot></slot>
          </main>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.form-control
  padding: 20px
  border-radius: 10px
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px
  padding-right: 80px
  &:focus-visible
    border-color: #F0C900 !important

.form-select
  padding: 12px
  border-radius: 10px
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px
  padding-right: 80px
  &:focus-visible
    border-color: #F0C900 !important

.icon
  width: 40px
  top: 12px
  right: 20px

.card
  .card-body
    padding: 10px

.active
  border: 1px solid #F0C900
  border-radius: 10px
</style>
