<template>
    <sidebar @onChangedShow="ChangedShow($event)">
        <ViewConvocatoria v-if="ShowView === 'convocatorias'" />
        <ViewUsuarios v-else-if="ShowView === 'usuarios'" />
        <ViewFolder v-else-if="ShowView === 'folder'" />
    </sidebar>
</template>

<script setup>

useHead({
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
        }
    ],
});

const ShowView = ref("convocatorias")

definePageMeta({
    middleware: ["auth", "auto-logout"],
    layout: "none",
})

useSeoMeta({
    title: "Dashboard",
})

function ChangedShow(e) {
    ShowView.value = e
}

</script>