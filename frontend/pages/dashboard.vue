<template>
    <sidebar @onChangedShow="ChangedShow($event)" >
        <ViewConvocatoria v-if="ShowView === 'convocatorias'" />
        <ViewUsuarios v-else-if="ShowView === 'usuarios'" />
        <ViewFolder v-else-if="ShowView === 'folder'" />
    </sidebar>
</template>

<script setup>

const ShowView = ref("convocatorias")

definePageMeta({
    middleware: ["auth", "auto-logout"],
    layout: "none",
})

useSeoMeta({
    title: "Dashboard",
})

function ChangedShow(e){
    ShowView.value = e
}

</script>