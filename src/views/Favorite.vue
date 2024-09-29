<script setup>
import { ref, onMounted } from "vue";
import Favorito from "../components/Favoritos/index.vue";

const data = ref([]);

onMounted(() => {
  const items = localStorage.getItem("savedItems");

  if (items) {
    data.value = JSON.parse(items);
  }
});
</script>

<template>
  <div>
    <Favorito :data="data"></Favorito>
  </div>
</template>

<style scoped>
</style>
