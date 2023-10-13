<template>
    <v-data-table-virtual v-model="selected" show-select :headers="headers" :items="desserts" class="elevation-1" width="5">
        <template v-slot:item.online="{ item }">
            <v-icon :color="getColor(item.selectable.online)"> mdi-circle </v-icon>
        </template>
    </v-data-table-virtual>
</template>

<script setup>

import {
    VDataTableVirtual,
} from "vuetify/labs/VDataTable";

/* const props = defineProps<{
    data: object
}>() */

const getColor = (online) => {
    if (online >= 1) {
        return 'success'
    }
    else {
        return 'error'
    }
}

const headers = [
    { title: 'Online', key: 'online' },
    { title: 'ID', key: 'id' },
    { title: 'Nombre', key: 'nombre' },
    { title: 'Apellido', key: 'apellido' },
    { title: 'Rol', key: 'rol' },
]

const desserts = [
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 1,
        id: 6.0,
        nombre: 24,
        apellido: 4.0,
        rol: '1',
    },
    {
        online: 0,
        id: 0.0,
        nombre: 94,
        apellido: 0.0,
        rol: '0',
    },
    {
        online: 1,
        id: 26.0,
        nombre: 65,
        apellido: 7,
        rol: '6',
    },
    {
        online: 1,
        id: 16.0,
        nombre: 23,
        apellido: 6.0,
        rol: '7',
    },
    {
        online: 0,
        id: 1.0,
        nombre: 49,
        apellido: 3.9,
        rol: '16',
    },
    {
        online: 1,
        id: 9.0,
        nombre: 37,
        apellido: 4.3,
        rol: '1',
    },
    {
        online: 1,
        id: 0.2,
        nombre: 98,
        apellido: 0,
        rol: '2',
    },
    {
        online: 1,
        id: 3.7,
        nombre: 67,
        apellido: 4.3,
        rol: '8',
    },
    {
        online: 0,
        id: 3.2,
        nombre: 87,
        apellido: 6.5,
        rol: '45',
    },
    {
        online: 0,
        id: 25.0,
        nombre: 51,
        apellido: 4.9,
        rol: '22',
    },
]
</script>

<style scoped></style>