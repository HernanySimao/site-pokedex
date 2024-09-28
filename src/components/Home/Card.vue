<script setup>
import { useGetNumber } from "../../composables/useGetNumber";
import { useIdStore } from "../../stores/useIdStore";

const idStore = useIdStore();

const sendId = (id) => {
  idStore.setId(id);
};

const image = import.meta.env.VITE_URL_ASSET;

defineProps({
  data: {
    type: Object,
    required: true,
    default: () => [],
  },
});
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div
          v-for="(item, i) in data"
          :key="i"
          class="col-md-4 mb-5 mt-5 d-flex align-items-center"
        >
          <div
            @click="sendId(useGetNumber(item?.url))"
            class="card w-100 cursor-pointer d-flex flex-column align-items-center position-relative"
          >
            <div
              class="card-body d-flex flex-column align-items-center justify-content-center"
            >
              <div class="d-flex justify-content-center mb-3">
                <img
                  class="poke-image"
                  :src="image + useGetNumber(item?.url) + '.svg'"
                  alt="image"
                />
              </div>
              <div class="text-center mt-5">
                <span>#{{ useGetNumber(item?.url) }} </span>
                <h3 class="text-capitalize">{{ item.name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.card
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px
  border: none
  height: 200px

.poke-image
  width: 100px
  position: absolute
  top: -50px
</style>
