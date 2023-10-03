<template>
    <div class="container">
        <h6 class="title-h6"> {{ fecha }}  </h6>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    fecha: string
}>();

</script>

<style scoped>
.container {
    width: 95%;
    height: 2rem;
    margin: auto;
    border-bottom: 2px solid #4F5464;
}

.container h6{
    margin-top: 1rem;
    margin-left: 1.5rem;
}

</style>