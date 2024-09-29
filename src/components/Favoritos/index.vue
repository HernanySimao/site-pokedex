<script  setup>
import Card from "../Card.vue";

defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>


<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <h1>Os seus pokemon favoritos</h1>
      </div>

      <div v-if="data.length">
        <Card :data="data"> </Card>
      </div>
      <div class="mt-5 p-5 text-center" v-else>
        <span>Nenhum item na lista.</span>
      </div>
    </div>
  </section>
</template>