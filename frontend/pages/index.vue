<template>
    <main class="main-container">
        <section class="form-section">
            <section class="header-section">
                <div class="header-text">
                    <span class="header-secondary-text">Dashboard</span>
                    <span class="header-primary-text">TFI Convocatorias</span>
                </div>
                <div class="header-icon">
                    <img src="../public/img/icon-tfi.png" alt="TFI Icon">
                </div>
            </section>
            <v-form @submit.prevent>
                <h1 id="title-login">Login</h1>
                <v-text-field variant="solo-filled" v-model="email" :rules="[rules.required, rules.email]" label="User"
                    placeholder="example@gmail.com" type="email" class="textFild"></v-text-field>

                <v-text-field variant="solo" v-model="password" :rules="[rules.required]" label="Password"
                    placeholder="Password" type="password" class="textFild"></v-text-field>

                <v-btn class="btn" color="#18222F" size="x-large">
                    Sign in
                </v-btn>
                <v-btn class="btn" color="white" size="x-large">
                    Forgot password
                </v-btn>
            </v-form>
            <span id="span-help">¿Necesitas ayuda?</span>
        </section>
        <div class="image-section">
            <img src="../public/img/fondoLogin.png" alt="Login Background" class="background-image">
            <span class="image-overlay">¡Encontrar la convocatoria perfecta! Tenemos un inventario de más de 1400 actores
                que pueden apoyar tu proyecto.</span>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from "vue"

const email = ref('')
const password = ref('')
const rules = {
    required: (value: any) => !!value || 'El campo es obligatorio.',
    counter: (value: string | any[]) => value.length <= 20 || 'Maximo 20 caracteres',
    email: (value: string) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Correo no valido.'
    },
}

useHead({
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
        }
    ],
});

definePageMeta({
    layout: "default"
})

useSeoMeta({
    title: "Login"
})




</script>

<style scoped>
.main-container {
    margin: 0;
    display: grid;
    grid-template-columns: 40% 60%;
    height: 100vh;
}

.form-section {
    grid-template-rows: 30% 45%;
    justify-content: center;
    align-items: center;
    display: grid;
    padding: 20px;
}

.form-section form {
    min-width: 30vw;
}

.image-section {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.background-image {
    max-width: 200vw;
    max-height: 100vh;
    height: auto;
}

.image-overlay {
    position: absolute;
    bottom: 64px;
    right: 70px;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    width: 25%;
    font-size: 1.25rem;
    font-weight: 400;
    text-align: end;
}

.header-section {
    grid-template-columns: 12% 60%;
    grid-auto-flow: row;
    display: grid;
    gap: 0px 10px;
    grid-template-areas:
        "header-icon header-text";
    justify-content: start;
}

.header-text {
    display: grid;
    grid-template-rows: 35% 45%;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        "header-secondary-text"
        "header-primary-text";
    grid-area: header-text;
    align-items: center;
    align-content: space-around;
}

.header-secondary-text {
    color: #4F5464;
    grid-area: header-secondary-text;
}

.header-primary-text {
    grid-area: header-primary-text;
    font-size: 2rem;
    font-weight: 700;
    color: black;
}

.header-icon {
    grid-area: header-icon;
    background-color: #B84D2A;
    border-radius: 10px;
    width: 60px;
    height: 60px;
    display: grid;
    justify-content: center;
    align-items: center;
}

.textFild {
    font-family: Inter;
    font-weight: 600;
    line-height: normal;
    margin-top: .5rem;
    width: 30vw;
}

.btn {
    margin: 1rem 2rem 0 0;
    min-height: 3.5rem;
    width: 14.1vw;
}

#title-login {
    color: #210011;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}

#span-help {
    text-align: center;
    color: #18222F;
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: auto;
}

@media (max-width: 1366px) {

    .image-overlay {
        bottom: 44px;
        right: 30px;
        width: 30%;
        font-size: 1rem;
    }

    .header-icon {
        width: 50px;
        height: 50px;
    }

    .header-icon img {
        width: 3.5vw;
    }

    .header-primary-text {
        font-size: 1.6rem;
    }

    .header-secondary-text {
        font-size: .8rem;
    }

    .btn {
        margin: 1rem 2rem 0 0;
        min-height: 3.5rem;
        width: 13.7vw;
        font-size: 1rem;
    }

    #title-login {
        font-size: 1.8rem;
    }

}

@media (max-width: 768px) {

    .background-image {
        display: none;
    }



}
</style>
