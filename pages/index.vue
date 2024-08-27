<template>
  <v-row
    :class="_store.theme === 'dark' ? 'content-dark-mode' : 'content-light-mode'"
    class="content d-flex justify-center align-center"
  >
    <v-col cols="12" sm="12" md="6">
      <div
        class="d-flex flex-column justify-center align-center text-center ga-3 ga-md-5"
      >
        <h1 class="text-h4 text-sm-h2 text-green">
          Nuxt.js is a framework based on Vue.js
        </h1>
        <h5 class="text-subtitle-1 text-sm-h4">
          that offers server-side rendering (SSR), static site generation (SSG), and a
          complete frontend development experience.
        </h5>
        <p class="text-subtitle-2 text-sm-subtitle-1">
          It makes Vue.js applications more scalable and SEO-friendly. Nuxt.js also comes
          with a powerful modular architecture, simplifying tasks like routing, data
          fetching, and meta management.
        </p>
      </div>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import store from "~/store/store";

const _store = store();
const { t, locale, locales, setLocale } = useI18n();
</script>
<style scoped>
.content {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0%;
  right: 0%;
  top: 0%;
}
.content-dark-mode {
  background-image: url("https://images5.alphacoders.com/133/1338166.png");
  background-size: cover;
  background-position: center;
}

.content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.1rem);
  z-index: 1;
}

.content > * {
  position: relative;
  z-index: 2;
}
</style>
