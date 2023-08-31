<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer color="#18222F" rail permanent>
                <v-list-item nav id="icon-tfi">
                    <img src="../public/img/icon-tfi2.png" alt="TFI-LATAM">
                </v-list-item>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item value="cubo">
                        <img src="../public/img/cubo.svg" alt="">
                    </v-list-item>

                    <v-list-item value="user">
                        <img src="../public/img/users.svg" alt="">
                    </v-list-item>

                    <v-list-item value="folder">
                        <img src="../public/img/folder.svg" alt="">
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-navigation-drawer color="#F0F4F9" v-model="drawer" :rail="rail" permanent @click="rail = false">
                <v-list>
                    <v-list-item nav>
                        <span id="span-dash-secundary">Plataforma TFI</span>
                        <span id="span-dash-primary">DASHBOARD</span>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item title="Contacts" value="contacts"></v-list-item>

                    <v-list-item title="Settings" value="settings"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style="height: 10vh"></v-main>
        </v-layout>
    </v-card>
</template>

<script setup lang="ts">
const drawer = ref(true)
const rail = ref(true)

</script>

<style scoped>
#icon-tfi {
    background: #2B5D82;
    height: 5.6vh;
}

#icon-tfi img {
    width: 2vw;
    height: auto;
}

.sidebar-item:active {
    background-color: red;
}

#span-dash-secundary {
    display: block;
    text-align: end;
    color: #4F5464;
    font-family: Inter;
    font-size: 1rem;
}

#span-dash-primary {
    display: block;
    text-align: end;
    color: #000;
    font-family: Inter;
    font-size: 1.5rem;
    font-weight: 600;
}
</style>