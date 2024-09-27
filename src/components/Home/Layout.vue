<script   setup>
import { reactive, ref } from "vue";
import HomeCard from "./Card.vue";

defineProps({
  data: {
    type: Object,
    required: true,
    default: () => [],
  },
});

const imgUrl = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
);

const filterTypes = reactive([
  {
    name: "Nome",
    type: null,
    image: "/image/game-control.png",
  },
  {
    name: "Número",
    type: null,
    image: "/image/gamex.png",
  },
  {
    name: "Tipo",
    type: "button",
    image: "/image/eggs.png",
  },
]);
</script>


<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-7 mb-5">
          <div>
            <div class="position-relative">
              <input
                type="text"
                placeholder="Pesquisa o seu pokemon"
                class="form-control"
              />
              <img
                class="position-absolute icon"
                src="/image/browser.png"
                alt=""
              />
            </div>
          </div>

          <div class="row">
            <div
              v-for="(type, i) in filterTypes"
              :key="i"
              class="col-md-3 mt-4 ms-3 cursor-pointer"
            >
              <div class="card text-center">
                <div class="card-body">
                  <div>
                    <img class="icon-filter" :src="type?.image" alt="" />
                    <span class="ms-3"> {{ type.name }} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HomeCard :data="data" :image="imgUrl" class="mt-5"> </HomeCard>
        </div>
        <div class="col-md-5">
          <main>
            <slot> </slot>
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
