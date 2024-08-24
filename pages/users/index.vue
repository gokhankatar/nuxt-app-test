<template>
    <p class="pa-5 text-uppercase">{{ t('users') }}</p>
    <hr class="my-3">
    <v-row class="my-5">
        <v-col v-for="(item, index) of data.data" :key="index" cols="12" sm="6" md="3">
            <v-card class="card transition-lg cursor-pointer pa-3 d-flex flex-column rounded-lg">
                <v-card-title class="title">{{ item.username }}</v-card-title>
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-text>{{ item.address.street + ' ' + item.address.suite + ' ' + item.address.city
                    }}</v-card-text>
                <v-card-text>{{ item.email }}</v-card-text>
                <v-card-text class="link cursor-pointer">{{ item.website }}</v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script lang="ts" setup>
const { t } = useI18n();

const { data } = await useFetch('/api/users');
</script>
<style scoped>
@import url(/assets/css/main.css);

.card:hover .title{
    color: #00DC81;
}
.link:hover{
    color: #00DC81;
}
</style>