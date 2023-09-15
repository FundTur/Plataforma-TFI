<template>
    <v-app-bar v-bind:optionsMenu="optionsMenu">
        <div class="layout">
            <div><img :src='optionsMenu.src' alt=""></div>

            <div id="container-text">
                <span> {{ optionsMenu.secundaryTitle }} </span>
                <h2> {{ optionsMenu.primaryTitle }} </h2>
            </div>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon>
            <img src="/img/icon-mas.svg" alt="">
        </v-btn>
    </v-app-bar>
</template>

<script setup lang="ts" >
const props = defineProps<{
    optionsMenu: {
        secundaryTitle: string,
        primaryTitle: string,
        src: string,
    }

}>();
</script>

<style scoped>
.layout {
    margin-left: 5rem;
    display: flex;
}

#container-text {
    margin-left: 1rem;
}

span {
    color: #4F5464;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
}

h2 {
    margin-top: .3rem;
    color: #000;
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
}
</style>