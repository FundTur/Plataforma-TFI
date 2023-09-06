<template>
    <v-layout>
        <v-navigation-drawer color="#18222F" rail>
            <v-list-item class="icon" nav>
                <img src="/img/icon-tfi2.png" alt="TFI-LATAM">
            </v-list-item>
            <v-divider></v-divider>
            <v-list density="compact" nav>
                <v-list-item active-class="list-focus" value="convocatorias" @click="ShowView = 'convocatorias'">
                    <img src="/img/cubo.svg" alt="">
                </v-list-item>
                <v-list-item active-class="list-focus" value="users" @click="ShowView = 'usuarios'">
                    <img src="/img/users.svg" alt="">
                </v-list-item>
                <v-list-item active-class="list-focus" value="folder" @click="ShowView = 'folder'">
                    <img src="/img/folder.svg" alt="">
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-navigation-drawer color="#F0F4F9" v-model="drawer" :rail="rail" permanent @click="rail = false">
            <v-list>
                <v-list-item prepend-avatar="TFI" @click.stop="rail = !rail">
                    <div id="title-navbar">
                        <span>Plataforma TFI</span><br>
                        <span id="primary-text">DASHBOARD</span>
                    </div>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item append-icon="search">
                    <input type="text" v-model="id" id="barra-busqueda" placeholder="Buscar entidad..." />
                    <p v-if="pending">Fetching...</p>
                    <pre v-else-if="error">{{ error }}</pre>
                </v-list-item>

                <v-list-item v-for="(results, index) in product.results" :key="index">
                    <img :src="results.image" alt="" width="50px">
                </v-list-item>

            </v-list>
        </v-navigation-drawer>
        <v-main style="height: 100vh">
            <ViewConvocatoria v-if="ShowView === 'convocatorias'" />
            <ViewUsuarios v-else-if="ShowView === 'usuarios'" />
            <ViewFolder v-else-if="ShowView === 'folder'" />
        </v-main>
    </v-layout>
</template>

<script setup>

import { ref } from "vue"

const id = ref("")
const ShowView = ref("convocatorias")
const drawer = ref(true)
const rail = ref(true)
const { data: product, pending, error } = await useFetch(() => `https://rickandmortyapi.com/api/character/?name=${id.value}`)


</script>

<style scoped>
.icon {
    background-color: #2B5D82;
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
</style>