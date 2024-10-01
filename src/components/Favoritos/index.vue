<script setup>
import { ref, onMounted } from "vue";
import Card from "../Card.vue";
import AOS from "aos";

import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const favorites = ref([]);

const showConfirmation = ref(false);
const countdown = ref(5);
let timeoutId;
let intervalId;

const loadFavorites = () => {
  const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
  favorites.value = savedItems;
};

onMounted(() => {
  loadFavorites();
  AOS.refresh();
});

const clearSavedItems = () => {
  showConfirmation.value = true;
  countdown.value = 5;
  timeoutId = setTimeout(() => {
    localStorage.removeItem("savedItems");
    favorites.value = [];
    showConfirmation.value = false;
    clearInterval(intervalId);
  }, 5000);

  intervalId = setInterval(() => {
    countdown.value -= 1;
    if (countdown.value <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
};

const cancelClear = () => {
  clearTimeout(timeoutId);
  clearInterval(intervalId);
  showConfirmation.value = false;
};
</script>

<script>
export default {
  name: "Favorite",
};
</script>

<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <h1>{{ $t("favorite.label") }}</h1>
        <p v-if="favorites.length && !showConfirmation">
          {{ $t("favorite.description") }}
          <span
            class="primary-text-color dark-color cursor-pointer"
            @click="clearSavedItems"
          >
            {{ $t("favorite.click") }}
          </span>
        </p>

        <div v-if="showConfirmation">
          <p>
            {{ $t("favorite.in") }}
            <strong class="primary-text-color">{{ countdown }}s</strong>
            {{ $t("favorite.alert") }}
            <span
              class="primary-text-color dark-color cursor-pointer"
              @click="cancelClear"
              >{{ $t("favorite.here") }}</span
            >.
          </p>
        </div>
      </div>

      <div data-aos="fade-up" class="mt-5 mt-md-4" v-if="favorites.length">
        <Card :data="favorites"></Card>
      </div>
      <div class="mt-5 p-5 text-center" v-else>
        <span>{{ $t("favorite.noItem") }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
