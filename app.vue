<script lang="ts" setup>
import { onMounted, ref } from "vue";
import store from "./store/store";

const _store = store();
const isLoading = ref(true);

onMounted(() => {
  isLoading.value = false;
});
</script>

<template>
  <v-app :theme="_store.theme">
    <v-main>
      <Loading v-if="isLoading" />
      <v-container v-if="!isLoading" class="pa-5 pa-sm-10 pa-md-15">
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
