<template>
    <div>
        <FormRegist v-if="showRegist" :showEmail="showEmail" @onChangedShow="onChangedView" />
        <FormEmail v-if="showEmail" @onChangedShowPass="onChangedViewPas" />
        <FormPassword v-if="showPassword" />
    </div>
</template>

<script setup lang="ts">

useHead({
    title: "Register"
})

const showPassword = ref(false)
const showEmail = ref(false)
const showRegist = ref(true)

function onChangedView() {
    showEmail.value = true
    showRegist.value = false
}

function onChangedViewPas() {
    showEmail.value = false
    showPassword.value = true
}

</script>

<style scoped>
</style>