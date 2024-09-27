<script setup>
import HomeLayout from "./components/Home/Layout.vue";
import HomeDetails from "./components/Home/Details.vue";
</script>

<template>
  <div>
    <HomeLayout>
      <HomeDetails> </HomeDetails>
    </HomeLayout>
  </div>
</template>

<style lang="sass">
@import "./assets/sass/main.sass"
</style>
