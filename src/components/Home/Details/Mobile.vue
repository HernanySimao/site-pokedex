<script setup>
import { ref } from "vue";
import { useGetNumber } from "../../../composables/useGetNumber";
import { useGetTypeColor } from "../../../composables/useGetTypeColor";
import { useModalStore } from "../../../stores/modalStore";

const modalStore = useModalStore();

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

const showModal = ref(false);

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

<script>
export default {
  name: "HomeDetailsMobile",
};
</script>
<template>
  <section>
    <div
      v-if="modalStore.showModal"
      class="modal fade show"
      style="display: block"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Detalhes do Pokémon</h5>
            <button
              type="button"
              class="btn-close"
              @click="modalStore.closeModal"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div>
                  <div v-if="data" class="card-body text-center">
                    <div class="mb-4">
                      <img
                        class="pokemon"
                        :src="image + id + '.svg'"
                        :alt="id"
                      />
                    </div>
                    <span>#{{ id }} </span>

                    <h1>Estatísticas</h1>
                    <div
                      class="d-flex justify-content-center flex-wrap text-center mb-5"
                    >
                      <div
                        class="stats col-12"
                        v-for="(status, i) in data?.stats"
                        :key="i"
                      >
                        <span class="text-uppercase">
                          {{ status?.stat?.name }} » {{ status?.base_stat }}
                        </span>
                      </div>
                    </div>

                    <h1>Tipos</h1>
                    <div class="d-flex justify-content-center flex-wrap mb-5">
                      <div
                        class="types text-white col-12"
                        v-for="(type, i) in data?.types"
                        :key="i"
                        :style="{
                          'background-color': getTypeColor(type?.type?.name),
                        }"
                      >
                        <span class="text-capitalize">
                          {{ type?.type?.name }}
                        </span>
                      </div>
                    </div>

                    <h1 class="mb-4">Evoluções</h1>
                    <div class="d-flex justify-content-center flex-wrap">
                      <div
                        class="col-12 align-items-center mt-4"
                        v-for="(evolution, i) in getEvolutions(
                          evaluation?.chain
                        )"
                        :key="i"
                      >
                        <div class="cursor-pointer">
                          <img
                            class="evolution"
                            :src="image + useGetNumber(evolution?.url) + '.svg'"
                            :alt="evolution?.url"
                          />
                          <span class="text-capitalize">{{
                            evolution?.name
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="text-center p-5 mt-5 mb-5" v-else>
                    <span>Selecione um Pokemon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn button-primary w-100"
              @click="modalStore.closeModal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
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
    background-color: #F0C900
    color: #fff
.types
  border-radius: 18px
  margin: 2px
  padding: 13px 2px
  font-size: 13px

/* Estilos básicos do modal */
.modal
  background: rgba(0, 0, 0, 0.5)
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: flex
  align-items: center
  justify-content: center

  &-content
    background: #fff
    border-radius: 8px
    padding: 20px
    max-width: 800px
    width: 100%

    &-header, &-footer
      display: flex
      justify-content: space-between
      align-items: center
</style>
