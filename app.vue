<script lang="ts" setup>
import store from './store/store';

const _store = store();
</script>

<template>
  <v-app :theme="_store.theme">
    <v-main>
      <v-container class="pa-5 pa-sm-10 pa-md-15">
        <NuxtLoadingIndicator />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
@import url(assets/css/main.css);
</style>
