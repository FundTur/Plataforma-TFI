<template>
    <v-form @submit.prevent :class="customClass">
        <h1 id="title-login">Login</h1>
        <v-text-field variant="solo-filled" v-model="email" :rules="[rules.required, rules.email]" label="User"
            placeholder="example@gmail.com" type="email" class="textFild"></v-text-field>

        <v-text-field variant="solo" v-model="password" :rules="[rules.required]" label="Password" placeholder="Password"
            type="password" class="textFild"></v-text-field>

        <v-btn class="btn" color="#18222F" size="x-large">
            Sign in
        </v-btn>
    </v-form>
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

const props = defineProps<{
    customClass?: string
}>();

</script>

<style scoped>
.textFild {
    font-family: Inter;
    font-weight: 600;
    line-height: normal;
    margin-top: .5rem;
    width: 30vw;
}

.btn {
    width: 8vw;
}

#title-login {
    color: #210011;
    font-family: Inter;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}

@media (max-width: 1366px) {

    #title-login {
        font-size: 1.8rem;
    }
}


@media (max-width: 960px) {

    .textFild {
        margin-top: .5rem;
        width: 62vw;
    }

    .btn {
        width: 15vw;
        font-size: 1rem;
    }

}


@media (max-width: 665px) {

    #title-login {
        font-size: 1.5rem;
    }

    .textFild {
        font-weight: 600;
        margin-top: .5rem;
        width: 60vw;
    }

}


@media (max-width: 520px) {

    .textFild {
        width: 82vw;
    }
}

</style>