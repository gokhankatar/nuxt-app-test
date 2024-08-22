<template>
    <v-app-bar class="py-1 px-5 px-sm-10 px-md-15" elevation="2">
        <template v-slot:prepend>
            <NuxtLinkLocale to="/" class="cursor-pointer link d-flex justify-center align-center ga-3">
                <v-img :src="logoImg" width="50" />
                <span class="d-none d-sm-flex text-subtitle-1 text-sm-h5">Test App</span>
            </NuxtLinkLocale>
        </template>
        <template v-slot:append>
            <div class="d-flex justify-center align-center ga-2">
                <NuxtLinkLocale :class="route.fullPath.includes('learn') ? 'active-link' : ''"
                    class="d-none d-sm-flex link transition pa-2 rounded-lg" to="/learn">{{ t('learn') }}
                </NuxtLinkLocale>
                <NuxtLinkLocale :class="route.fullPath.includes('documentation') ? 'active-link' : ''"
                    class="d-none d-sm-flex link transition pa-2 rounded-lg" to="/documentation">{{
                        t('documentation') }}
                </NuxtLinkLocale>
                <NuxtLinkLocale :class="route.fullPath.includes('users') ? 'active-link' : ''"
                    class="d-none d-sm-flex link transition pa-2 rounded-lg" to="/users">{{ t('users') }}
                </NuxtLinkLocale>
                <div class="button-group d-flex ga-3">
                    <v-icon class="link-icon transition-lg" @click="_store.changeTheme"
                        :icon="_store.theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'" />
                    <v-icon id="lang" class="cursor-pointer link-icon transition-lg" icon="mdi-translate">
                    </v-icon>
                    <v-menu activator="#lang">
                        <v-list>
                            <v-list-item v-for="(item, index) in locales" :key="index">
                                <v-list-item-title class="link cursor-pointer" @click="setLocale(item.code)">{{
                                    item.name
                                }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </div>
        </template>
    </v-app-bar>
</template>
<script lang="ts" setup>
import store from "~/store/store";
import logoImg from "~/public/favicon.ico";

const _store = store();
const route = useRoute();
const router = useRouter();
const { t, locale, locales, setLocale } = useI18n();
</script>
<style scoped>
@import url("/assets/css/main.css");

.link {
    text-decoration: none !important;
    color: gray;
}

.link:hover {
    color: #00DC81;
}

.link-icon:hover {
    color: #00DC81;
}

.active-link {
    background-color: #00DC81;
    color: #fff;
}
</style>