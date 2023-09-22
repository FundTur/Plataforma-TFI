<template>
    <v-app-bar v-bind:optionsMenu="optionsMenu">
        <div class="layout">
            <div><img id="logoVista" :src='optionsMenu.src' alt=""></div>

            <div id="container-text">
                <span> {{ optionsMenu.secundaryTitle }} </span>
                <h2> {{ optionsMenu.primaryTitle }} </h2>
            </div>
        </div>
        <v-spacer></v-spacer>
        <div class="container">
            <v-text-field v-model="search" variant="outlined" hide-details label="Search" prepend-inner-icon="mdi-magnify"
                append-inner-icon="mdi-filter-variant" single-line></v-text-field>
        </div>

        <v-menu :close-on-content-click="false">
            <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                    <img src="/img/icon-mas.svg" alt="">
                </v-btn>
            </template>

            <v-card min-width="300" max-width="300">
                <v-list>
                    <v-combobox v-model="chips" :items="items" chips clearable multiple>
                    </v-combobox>
                </v-list>
            </v-card>
        </v-menu>

    </v-app-bar>
</template>

<script setup lang="ts" >

let chips = ref([])
const items = ["Filtro 1", "Filtro 2", "Filtro 3", "Filtro 4", "Filtro 5", "Filtro 6"]
const search = ref()

const props = defineProps<{
    optionsMenu: {
        secundaryTitle: string,
        primaryTitle: string,
        src: string,
    }

}>();

watch(
    () => chips.value,
    (newValue) => {
        sessionStorage.setItem('chips', JSON.stringify(newValue))
    }
)

onMounted(() => {
    const saveChips = sessionStorage.getItem('chips')
    if (saveChips) {
        chips.value = JSON.parse(saveChips)
    }
}
)

</script>

<style scoped>
.container {
    width: 4vw;
}

.container:hover {
    width: 20vw;
}

.layout {
    margin-left: 4rem;
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

.container {
    width: 4vw;
}

.container:hover {
    width: 20vw;
}

@media (max-width: 1455px) {

    .container {
        width: 5vw;
    }

    .container:hover {
        width: 30vw;
    }

}

@media (max-width: 1250px) {

    .container {
        width: 6vw;
    }

}


@media (max-width: 1030px) {

    .container {
        width: 7vw;
    }

}


@media (max-width: 912px) {
    .layout {
        margin-left: 2rem;
    }
}

@media (max-width: 1455px) {

    .container {
        width: 5vw;
    }

    .container:hover {
        width: 30vw;
    }

}

@media (max-width: 1250px) {

    .container {
        width: 6vw;
    }

}


@media (max-width: 1050px) {

    .container {
        width: 7vw;
    }

}

@media (max-width: 860px) {

    .container {
        width: 8vw;
    }

    .container:hover {
        width: 40vw;
    }

}

@media (max-width: 750px) {

    .container {
        width: 10vw;
    }

    .container:hover {
        width: 40vw;
    }

}

@media (max-width: 650px) {

    .container {
        width: 11vw;
    }

    .container:hover {
        width: 40vw;
    }

}

@media (max-width: 550px) {

    .container {
        width: 11vw;
    }

    .container:hover {
        width: 40vw;
    }

}

@media (max-width: 912px) {
    .layout {
        margin-left: 2rem;
    }

    span {
        font-size: .8rem;
    }

    h2 {
        font-size: 1.2rem;
    }
}

@media (max-width: 650px) {
    .layout {
        margin-left: 1rem;
    }

    span {
        font-size: .7rem;
    }

    h2 {
        font-size: 1rem;
    }

    #logoVista {
        width: 40px;
    }

}


@media (max-width: 550px) {
    .layout {
        margin-left: .3rem;
    }

    span {
        font-size: .7rem;
    }

    h2 {
        font-size: 1rem;
    }

    .container {
        width: 13vw;
    }
}
</style>