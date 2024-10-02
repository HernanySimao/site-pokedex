<script setup lang="ts">
import { ref, computed } from "vue";
import { useGetNumber } from "../composables/useGetNumber";
import { useIdStore } from "../stores/useIdStore";
import { useModalStore } from "../stores/modalStore";
import { PokemonItem, SavedItem } from "../interfaces/ICard";

// Stores
const modalStore = useModalStore();
const idStore = useIdStore();

const savedItems = ref<SavedItem[]>(
  JSON.parse(localStorage.getItem("savedItems") || "[]")
);

const isItemSaved = (url: string): boolean => {
  return savedItems.value.some((savedItem) => savedItem.url === url);
};
const sendId = (item: PokemonItem): void => {
  modalStore.openModal();
  idStore.setId(useGetNumber(item?.url));
};

const saveToLocalStorage = (item: PokemonItem): void => {
  const existingItem = savedItems.value.find(
    (savedItem) => savedItem.url === item.url
  );

  if (!existingItem) {
    savedItems.value.push({
      id: useGetNumber(item.url), // Adiciona o ID ao salvar
      name: item.name,
      url: item.url,
    });
  } else {
    savedItems.value = savedItems.value.filter(
      (savedItem) => savedItem.url !== item.url
    );
  }
  localStorage.setItem("savedItems", JSON.stringify(savedItems.value));
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
          class="col-md-4 mb-5 pt-4 pt-md-0 mt-md-5 d-flex align-items-center"
        >
          <div
            @click="sendId({ url: item?.url, name: item?.name })"
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
                <h3 class="text-capitalize">{{ item?.name }}</h3>
              </div>

              <img
                class="heart"
                :src="
                  isItemSaved(item?.url)
                    ? '/image/coracao-active.png'
                    : '/image/coracao.png'
                "
                alt=""
                @click.stop="
                  saveToLocalStorage({ name: item?.name, url: item?.url })
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.heart
  width: 20px
  position: absolute
  bottom: 10px
  right: 10px
  top: 10px
  transition: opacity 0.3s

.card
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px
  border: none
  height: 200px

.poke-image
  width: 100px
  position: absolute
  top: -50px
</style>
