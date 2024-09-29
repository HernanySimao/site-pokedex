<script setup>
import { routes } from "../router";
import { useRoute } from "vue-router";

const url = useRoute();

const routeList = routes;
</script>

<template>
  <section>
    <div class="container mt-3">
      <div class="row">
        <nav class="navbar navbar-expand-lg bg-white border rounded-3">
          <div class="container-fluid">
            <a class="navbar-brand logo" href="#">Pokémon</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li
                  class="nav-item"
                  v-for="route in routeList"
                  :key="route.name"
                >
                  <router-link
                    :class="{ active: url.fullPath == route.path }"
                    class="nav-link ms-2"
                    :to="route.path"
                    >{{ route.name }}</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <main>
      <slot></slot>
    </main>
  </section>
</template>

<style lang="sass" scoped>
.navbar
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)

.active
  border-bottom: 2px solid #F0C900
  color: #F0C900 !important
.nav-link
  color: #000
  text-decoration: none
  padding: 20px

  &:hover
    color: #F0C900
</style>
