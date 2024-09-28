<script setup>
import { reactive, ref, computed } from "vue";
import HomeCard from "./Card.vue";
import { useGetNumber } from "../../composables/useGetNumber"; // Ajuste o caminho conforme necessário

const { data } = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const filterTypes = reactive([
  {
    id: 1,
    name: "Nome",
    image: "/image/game-control.png",
  },
  {
    id: 2,
    name: "Número",
    image: "/image/gamex.png",
  },
  {
    id: 3,
    name: "Tipo",
    image: "/image/eggs.png",
  },
]);

const selected = ref(1);
const search = ref("");

const filteredData = computed(() => {
  return data.filter((item) => {
    const number = useGetNumber(item.url);

    if (selected.value === 1) {
      return item.name.toLowerCase().includes(search.value.toLowerCase());
    } else if (selected.value === 2) {
      return number && number.includes(search.value);
    }
    return false;
  });
});
</script>

<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-7 mb-5">
          <div>
            <div class="position-relative">
              <input
                v-model="search"
                type="text"
                :placeholder="`Pesquisar por ${
                  selected == 1 ? 'Nome' : 'Número'
                }`"
                class="form-control"
              />
              <img
                class="position-absolute icon"
                src="/image/browser.png"
                alt="Ícone de pesquisa"
              />
            </div>
          </div>

          <div class="row">
            <div
              v-for="(type, i) in filterTypes"
              :key="i"
              class="col-md-3 mt-4 ms-3 cursor-pointer"
            >
              <div @click="selected = type.id" class="card text-center">
                <div class="card-body">
                  <div>
                    <img
                      class="icon-filter"
                      :src="type?.image"
                      alt="Ícone de filtro"
                    />
                    <span class="ms-3"> {{ type.name }} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <HomeCard
            v-if="filteredData.length"
            :data="filteredData"
            class="mt-5"
          ></HomeCard>
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

.icon
  width: 40px
  top: 12px
  right: 20px

.icon-filter
  width: 25px

.card
  .card-body
    padding: 10px
</style>
