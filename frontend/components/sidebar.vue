<template>
    <v-layout>
        <v-navigation-drawer permanent rail color="#18222F">
            <v-list-item class="icon" nav>
                <img src="/img/icon-tfi2.png" alt="TFI-LATAM">
            </v-list-item>
            <v-divider></v-divider>
            <v-list density="compact" nav>
                <v-list-item active-class="list-focus" value="convocatorias"
                    @click="emits('onChangedShow', 'convocatorias')">
                    <img src="/img/cubo.svg" alt="">
                </v-list-item>
                <v-list-item active-class="list-focus" value="users" @click="emits('onChangedShow', 'usuarios')">
                    <img src="/img/users.svg" alt="">
                </v-list-item>
                <v-list-item active-class="list-focus" value="folder" @click="emits('onChangedShow', 'folder')">
                    <img src="/img/folder.svg" alt="">
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-navigation-drawer class="barra-busqueda" color="#F0F4F9" v-model="drawer" :rail="rail" @click="rail = false">
            <v-list>
                <v-list-item prepend-avatar="/img/lupa.svg" @click.stop="rail = !rail">
                    <div id="title-navbar">
                        <span>Plataforma TFI</span><br>
                        <span id="primary-text">DASHBOARD</span>
                    </div>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item append-icon="search">
                    <input type="text" v-model="id" id="barra-busqueda" placeholder="Buscar entidad..." />
                    <!--  TODO:Mensaje de error  <p v-if="pending">Fetching...</p>
                    <pre v-else-if="error">{{ error }}</pre> -->
                </v-list-item>

                <v-list-item v-for="(results, index) in product.results" :key="index">
                    <img :src="results.image" alt="" width="50px">
                </v-list-item>

            </v-list>
        </v-navigation-drawer>
        <v-main style="height: 100vh">
            <slot></slot>
        </v-main>
    </v-layout>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

if (process.client) {
    locale.value = window.navigator.language.substring(0, 2);
}

const id = ref("")
const { data: product, pending, error } = await useFetch(() => `https://rickandmortyapi.com/api/character/?name=${id.value}`)
const drawer = ref(true)
const rail = ref(true)

const emits = defineEmits<{
    (event: 'onChangedShow', value: String): void
}>();

</script>


<style scoped>
.icon {
    background-color: #474697;
    border-radius: 0px;
}

.icon img {
    width: 95%;
}

.list-focus {
    background-color: rgb(255, 255, 255);

}

#title-navbar {
    text-align: end;
}

#title-navbar span {
    color: #4F5464;
    font-family: Inter;
    font-size: .875rem;
    font-weight: 600;
}

#title-navbar #primary-text {
    font-size: 1.5rem;
    color: black;
}


#barra-busqueda {
    width: 15vw;
    height: 5.5vh;
    border-radius: 5px;
    border: 2px solid #E4EAF1;
    background: #FFF;
}

input:focus {
    outline: none;
}

@media (max-width: 1280px) {
    .barra-busqueda {
        display: none;
    }
}
</style>