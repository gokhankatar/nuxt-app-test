<template>
    <div>
        {{ locale }}
    </div>
    <div>{{ locales }}</div>
    <p>{{ t('blog') }}</p>
</template>
<script lang="ts" setup>
const { t, locale, locales, setLocale } = useI18n();
</script>
<style scoped></style>