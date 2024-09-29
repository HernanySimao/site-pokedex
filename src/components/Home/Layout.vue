<script setup>
import { ref, computed, onMounted } from "vue";
import AOS from "aos";
import Card from "../Card.vue";
import { useGetNumber } from "../../composables/useGetNumber";
import { useCustomFetch } from "../../composables/useCustomFetch";

const pokemons = ref([]);
const nextPage = ref(null);
const previousPage = ref(null);

const fetchPokemons = async (url = "pokemon/?limit=6&offset=0") => {
  try {
    const response = await useCustomFetch(url);
    pokemons.value = response.results.map((p) => ({
      name: p.name,
      url: p.url,
    }));
    nextPage.value = response.next
      ? response.next.replace(import.meta.env.VITE_API_URL, "")
      : null;

    previousPage.value = response.previous
      ? response.previous.replace(import.meta.env.VITE_API_URL, "")
      : null;
  } catch (error) {
    console.error("Erro ao buscar lista de Pokémon:", error);
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
        pokemons.value = response.pokemon.slice(0, 6).map((p) => ({
          name: p.pokemon.name,
          url: p.pokemon.url,
        }));
      } catch (error) {
        console.error("Erro ao buscar Pokémon por tipo:", error);
      }
    }
  } else {
    fetchPokemons();
  }
};

onMounted(() => {
  fetchTypes();
  fetchPokemons();
  AOS.refresh();
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
        <div class="col-md-7 mb-5 col-12">
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

          <div class="row mt-4 mb-5">
            <span>Selecione o tipo de filtro:</span>
            <div
              v-for="type in [
                { id: 1, name: 'Nome' },
                { id: 2, name: 'Número' },
              ]"
              :key="type.id"
              class="col-md-3 mt-2 mt-md-4 cursor-pointer"
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

            <div class="col-md-3 mt-2 mt-md-4">
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

          <Card
            data-aos="fade-up"
            v-if="filteredData.length"
            :data="filteredData"
            class="mt-5 pt-5"
          />
          <div class="text-center mt-5 mb-5 p-5" v-else>
            <span>Não encontramos nada, tente novamente</span>
          </div>

          <div
            data-aos="fade-up"
            v-if="filteredData.length"
            class="d-flex justify-content-between mt-4"
          >
            <button
              @click="fetchPokemons(previousPage)"
              :disabled="!previousPage"
              class="btn button-primary"
            >
              Anterior
            </button>
            <button
              @click="fetchPokemons(nextPage)"
              :disabled="!nextPage"
              class="btn button-primary"
            >
              Próximo
            </button>
          </div>
        </div>

        <div class="col-md-5" data-aos="fade-left">
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
