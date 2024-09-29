<script setup>
import { ref, onMounted } from "vue";
import Card from "../Card.vue";
import AOS from "aos";

defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});

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

<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <h1>Os seus pokemon favoritos</h1>
        <p v-if="favorites.length && !showConfirmation">
          Deseja limpar a sua lista?
          <span
            class="primary-text-color cursor-pointer"
            @click="clearSavedItems"
          >
            Clica aqui
          </span>
        </p>

        <div v-if="showConfirmation">
          <p>
            Em
            <strong class="primary-text-color">{{ countdown }}s</strong>
            limparemos tudo, você pode cancelar
            <span class="primary-text-color cursor-pointer" @click="cancelClear"
              >aqui</span
            >.
          </p>
        </div>
      </div>

      <div data-aos="fade-up" class="mt-5 mt-md-4" v-if="favorites.length">
        <Card :data="favorites"></Card>
      </div>
      <div class="mt-5 p-5 text-center" v-else>
        <span>Nenhum item na lista.</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
