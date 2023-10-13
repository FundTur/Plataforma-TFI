<template>
    <div>
        <Navbar :optionsMenu="optionsMenu" />
        <Table />
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const data = [
    {
        "id": 1,
        "nombre": "Juan",
        "apellido": "Pérez",
        "rol": "Usuario",
        "conectado": true
    },
    {
        "id": 2,
        "nombre": "María",
        "apellido": "Gómez",
        "rol": "Admin",
        "conectado": false
    },
    {
        "id": 3,
        "nombre": "Carlos",
        "apellido": "López",
        "rol": "Usuario",
        "conectado": true
    },
    {
        "id": 4,
        "nombre": "Laura",
        "apellido": "Martínez",
        "rol": "Admin",
        "conectado": true
    },
    {
        "id": 5,
        "nombre": "Pedro",
        "apellido": "Rodríguez",
        "rol": "Usuario",
        "conectado": false
    }
]


const optionsMenu = {
    secundaryTitle: t('dashboard.Main'),
    primaryTitle: t('dashboard.Users'),
    src: "/img/user-cicle.svg",
}
</script>

<style scoped></style>