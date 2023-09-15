<template>
    <v-form @submit.prevent class="form-login">
        <h1 id="title-login">{{ $t('Register') }}</h1>
        <div class="container-input">
            <v-text-field variant="solo-filled" :rules="[rules.required]" :label="$t('formulario.FirstName')"
                placeholder="Jhoan" type="text" class="textFild-row"></v-text-field>
            <v-text-field variant="solo-filled" :rules="[rules.required]" :label="$t('formulario.LastName')"
                placeholder=" Torres " type="text" class="textFild-row"></v-text-field>
        </div>
        <v-text-field variant="solo-filled" v-model="email" :rules="[rules.required, rules.email]"
            :label="$t('formulario.Email')" placeholder="example@gmail.com" type="email" class="textFild"></v-text-field>
        <v-text-field variant="solo" v-model="password" :rules="[rules.required]" :label="$t('formulario.Password')"
            :placeholder="$t('formulario.Password')" type="password" class="textFild"></v-text-field>
        <v-btn class="btn" color="#18222F" size="x-large">
            {{ $t('SING UP') }}
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

</script>

<style scoped>
.textFild {
    font-family: Inter;
    font-weight: 600;
    line-height: normal;
    margin-top: .5rem;
    width: 30vw;
}

.container-input {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
}

#title-login {
    color: #210011;
    font-family: Inter;
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

@media (max-width: 1180px) {

    .textFild-row {
        width: 14.7vw;
    }
}


@media (max-width: 960px) {

    .textFild {
        margin-top: .5rem;
        width: 62vw;
    }

    .textFild-row {
        width: 30.5vw;
    }

}


@media (max-width: 665px) {

    #title-login {
        font-size: 1.5rem;
    }

    .textFild {
        width: 60vw;
    }

    .textFild-row {
        width: 29.5vw;
    }

}

@media (max-width: 520px) {
    .textFild {
        margin-top: .5rem;
        width: 80vw;
    }

    .textFild-row {
        width: 38vw;
    }

}

@media (max-width: 412px) {

    .textFild {
        margin-top: .5rem;
        width: 82vw;
    }

    .container-input {
        display: block;
    }

    .btn {
        width: 35%;
    }

    .textFild-row {
        width: 82vw;
    }
}
</style>