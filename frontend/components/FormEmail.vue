<template>
    <v-form @submit.prevent="account" v-model="form">
        <div id="form-title">
            <h1 id="title-login"> {{ $t('Accountcheck') }} </h1>
            <p>{{ $t('TextCheck') }}</p>

            <v-text-field variant="solo-filled" :rules="[rules.required]" placeholder="0 0 0 0" type="number"
                class="textFild"></v-text-field>
            <v-btn :disabled="!form" type="submit" color="#474697" size="x-large">
                {{ $t('Continue') }}
            </v-btn>
        </div>
    </v-form>
</template>

<script setup lang="ts">

const form = ref(false)

const rules = {
    required: (value: any) => !!value || 'El campo es obligatorio.',
    counter: (value: string | any[]) => value.length <= 20 || 'Maximo 20 caracteres'
}

const emits = defineEmits<{
    (event: 'onChangedShowPass', value: Boolean): void
}>();

function account() {
    if (!form) return
    emits("onChangedShowPass", true)
}

</script>

<style scoped>
#form-title {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#form-title h1 {
    font-size: 2rem;
    color: #000;
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-bottom: 2rem;
}

#form-title p {
    color: #18222F;
    font-family: Inter;
    font-size: 1.2rem;
    font-weight: 500;
    width: 30vw;
    margin-bottom: 2rem;
}

.textFild {
    font-family: Inter;
    font-weight: 600;
    margin-top: 1rem;
    width: 30vw;
}


#title-login {
    color: #210011;
    font-family: Inter;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}

#formAccount {
    display: flex;
}

@media (max-width: 960px) {

    .textFild {
        margin-top: .5rem;
        width: 62vw;
    }

    #form-title p {
        width: 55vw;
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

    #form-title p {
        width: 85vw;
        margin-bottom: 1rem;
    }

}
</style>