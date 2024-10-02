<script setup>
import Menu from "./components/Menu.vue";
</script>

<template>
  <div>
    <div id="app">
      <Menu>
        <router-view></router-view>
      </Menu>
    </div>
  </div>
</template>

<style lang="sass">
@import "./assets/sass/main.sass"
</style>
