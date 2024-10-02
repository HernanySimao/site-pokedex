<script  lang="ts" setup>
import { ref, onMounted } from "vue";
import Favorito from "../components/Favoritos/index.vue";
import { IFavoriteItem } from "../interfaces/IFavoriteItem";

const data = ref<IFavoriteItem[]>([]);

onMounted(() => {
  const items = localStorage.getItem("savedItems");

  if (items) {
    data.value = JSON.parse(items) as IFavoriteItem[];
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
