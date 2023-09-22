<template>
    <v-form @submit.prevent="CreatePssword" v-model="form" class="form-login">
        <h1 id="title-login">{{ $t('TitlePassword') }}</h1>
        <v-text-field variant="solo-filled" v-model="password" :rules="[rules.required, rules.counter]"
            :label="$t('formulario.Password')" placeholder="" type="password" class="textFild"></v-text-field>
        <v-text-field variant="solo" v-model="passwordConfir" :rules="[rules.required, rules.samePassword]"
            :label="$t('formulario.PasswordConf')" type="password" class="textFild"></v-text-field>
        <div id="container-btn">
            <v-btn :disabled="!form" type="submit" class="btn" color="#474697" size="x-large">
                {{ $t('ContinueTFI') }}
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
const password = ref('')
const passwordConfir = ref('')

const rules = {
    required: (value: any) => !!value || 'El campo es obligatorio.',
    counter: (value: string | any[]) => value.length >= 8 || 'Debe tener minimo 8 caracteres',
    samePassword: (value: string) => value == password.value || 'Las contraeñas deben concidir',
}

function CreatePssword() {
    if (!form) return
    navigateTo("/")
}

</script>
