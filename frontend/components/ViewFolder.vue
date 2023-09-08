<template>
    <div>
        <Navbar v-model:optionsMenu="optionsMenu" />
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const optionsMenu = {
    secundaryTitle: t('dashboard.Main'),
    primaryTitle: t('dashboard.Files'),
    src: "/img/folder-cicle.svg",
}

</script>

<style scoped></style>