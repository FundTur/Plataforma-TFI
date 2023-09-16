<template>
    <v-form @submit.prevent="Register" v-model="form" class="form-login">
        <h1 id="title-login">{{ $t('Register') }}</h1>
        <v-text-field variant="solo-filled" v-model="password" :rules="[rules.required]" :label="$t('formulario.Password')"
            placeholder="" type="password" class="textFild"></v-text-field>
        <v-text-field variant="solo" v-model="passwordConfir" :rules="[rules.required]"
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
    counter: (value: string | any[]) => value.length <= 20 || 'Maximo 20 caracteres',
}

function Register() {
    if (!form) return
    emits('onChangedShow', true)
}

</script>

<style scoped>
.textFild {
    font-family: Inter;
    font-weight: 600;
    margin-top: .5rem;
    width: 30vw;
}

#title-login {
    color: #210011;
    font-family: Inter;
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

#container-btn {
    display: flex;
    justify-content: center;
}

@media (max-width: 960px) {

    .textFild {
        margin-top: .5rem;
        width: 62vw;
    }

}

@media (max-width: 520px) {
    .textFild {
        margin-top: .5rem;
        width: 80vw;
    }

    .textFild-row {
        width: 80vw;
    }

}
</style>