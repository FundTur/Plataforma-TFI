<template>
    <Navbar v-model:optionsMenu="optionsMenu" />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const optionsMenu = {
    secundaryTitle: t('dashboard.Main'),
    primaryTitle: t('Recruitment'),
    src: "/img/calendar.svg",
}

</script>

<style scoped></style>