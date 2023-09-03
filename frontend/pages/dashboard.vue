<template>
    <div>
        <h1>Hola</h1>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "sidebar",
    middleware: "auth"
})

useSeoMeta({
    title: "Dashboard"
})

</script>

<style scoped></style>