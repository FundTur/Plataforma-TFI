<template>
    <v-form @submit.prevent="Register" v-model="form" class="form-login">
        <h1 id="title-login">{{ $t('Register') }}</h1>
        <v-text-field variant="solo-filled" :rules="[rules.required]" :label="$t('formulario.FirstName')"
            placeholder="Jhoan" type="text" class="textFild"></v-text-field>
        <v-text-field variant="solo-filled" :rules="[rules.required]" :label="$t('formulario.LastName')"
            placeholder=" Torres " type="text" class="textFild"></v-text-field>
        <v-text-field variant="solo-filled" v-model="email" :rules="[rules.required, rules.email]"
            :label="$t('formulario.Email')" placeholder="example@gmail.com" type="email" class="textFild"></v-text-field>
        <v-text-field variant="solo-filled" v-model="phone" :rules="[rules.required]" :label="$t('formulario.Phone')"
            placeholder="phone 0000000000000000000" type="number" class="textFild"></v-text-field>
        <v-text-field variant="solo" v-model="password" :rules="[rules.required]" label="CC" placeholder="CC" type="number"
            class="textFild"></v-text-field>
        <div id="container-btn">
            <v-btn :disabled="!form" type="submit" class="btn" color="#474697" size="x-large">
                {{ $t('SING UP') }}
            </v-btn>
        </div>
    </v-form>
</template>

<script setup lang="ts">

import { ref } from "vue"

const emits = defineEmits<{
    (event: 'onChangedShow', value: Boolean): void
}>()

const form = ref(false)
const email = ref('')
const password = ref('')
const phone = ref()
const rules = {
    required: (value: any) => !!value || 'El campo es obligatorio.',
    counter: (value: string | any[]) => value.length <= 20 || 'Maximo 20 caracteres',
    email: (value: string) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Correo no valido.'
    },
}

function Register() {
    if (!form) return
    emits('onChangedShow', true)
}

</script>
