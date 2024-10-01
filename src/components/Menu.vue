<script setup>
import { ref, onMounted } from "vue";
import { routes } from "../router";
import { useRoute } from "vue-router";
import Cookies from "js-cookie";

import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem("language", lang);
};

const url = useRoute();
const routeList = routes;

const currentTheme = ref(Cookies.get("theme") || "light");

onMounted(() => {
  document.documentElement.setAttribute("data-theme", currentTheme.value);
});

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
  Cookies.set("theme", currentTheme.value, { expires: 7 });
  document.documentElement.setAttribute("data-theme", currentTheme.value);
};
</script>

<template>
  <section>
    <div class="container mt-3">
      <div class="row">
        <nav
          class="navbar navbar-expand-lg bg-white border rounded-3 p-md-3 p-4"
        >
          <div class="container-fluid">
            <router-link to="/" class="navbar-brand logo">Pokémon</router-link>
            <button
              class="btn btn-link theme d-inline-block d-md-none"
              @click="toggleTheme"
              aria-label="Toggle Theme"
            >
              <span v-if="currentTheme === 'light'" aria-hidden="true">🌙</span>
              <span v-else aria-hidden="true">☀️</span>
            </button>
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
                    class="nav-link ms-2 fw-bold"
                    :to="route.path"
                    >{{ route.name }}</router-link
                  >
                </li>
              </ul>
              <button
                class="btn btn-link theme d-none d-md-inline"
                @click="toggleTheme"
                aria-label="Toggle Theme"
              >
                <span v-if="currentTheme === 'light'" aria-hidden="true"
                  >🌙</span
                >
                <span v-else aria-hidden="true">☀️</span>
              </button>
              <div>
                <p>{{ $t("hello") }}</p>
                <p>{{ $t("welcome") }}</p>
                <button @click="changeLanguage('en')">English</button>
                <button @click="changeLanguage('pt')">Português</button>
              </div>
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

.theme
  text-decoration: none
  font-size: 30px

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
