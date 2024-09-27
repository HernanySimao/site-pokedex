<script setup>
import { useGetNumber } from "../../composables/useGetNumber";
defineProps({
  data: {
    type: Object,
    required: true,
    default: () => [],
  },

  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section>
    {{ data }}
    <div class="container">
      <div class="row">
        <div
          v-for="(item, i) in data"
          :key="i"
          class="col-md-4 mb-4 d-flex align-items-stretch"
        >
          <div class="card w-100">
            <div class="card-body">
              <div class="d-flex justify-content-center">
                <img
                  class="poke-image"
                  :src="image + useGetNumber(item?.url) + '.svg'"
                  alt="image"
                />
              </div>
              <div class="text-center">
                <span>Nº {{ useGetNumber(item?.url) }} </span>
                <h2 class="text-capitalize">{{ item.name }}</h2>
                <button>Tipo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.poke-image
  width: 100px
</style>