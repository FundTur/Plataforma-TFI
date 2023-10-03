<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

if (process.client) {
    locale.value = window.navigator.language.substring(0, 2);
}

let text = ref(t("SING UP"))

useHead({
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
        }
    ],
});

</script>

<template>
    <main class="main-container">
        <section class="form-section">
            <section class="header-section">
                <div class="header-text">
                    <span class="header-secondary-text">Dashboard</span>
                    <h2 class="header-primary-text">TFI {{ $t('Recruitment') }} </h2>
                </div>
                <div class="header-icon">
                    <img src="/img/icon-tfi.png" alt="TFI Icon">
                </div>
            </section>
            <section class="formulario">
                <slot></slot>
            </section>
            <span id="span-help">¿ {{ $t('Need help') }} ?</span>
        </section>
        <div class="image-section">
            <img src="/img/fondoLogin.svg" alt="Login Background" class="background-image">
            <span class="image-overlay"> {{ $t('TextLogin') }} </span>
        </div>
    </main>
</template>

<style scoped>
.main-container {
    display: grid;
    grid-template-columns: 40% 60%;
}

.form-section {
    grid-template-rows: 30% 45%;
    justify-content: center;
    align-items: center;
    display: grid;
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
    min-width: 200vw;
    min-height: 100vh;
    max-height: 100vh;
}

.image-overlay {
    position: absolute;
    bottom: 64px;
    right: 70px;
    color: white;
    width: 35vw;
    font-size: 1.1rem;
    text-align: end;
}

.header-section {
    grid-template-columns: 20% 80%;
    grid-auto-flow: row;
    display: grid;
    grid-template-areas:
        "header-icon header-text";
    justify-content: start;
}

.header-text {
    display: grid;
    grid-template-rows: 35% 45%;
    grid-auto-flow: row;
    grid-template-areas:
        "header-secondary-text"
        "header-primary-text";
    grid-area: header-text;
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
    background-color: #474697;
    border-radius: 11px;
    width: 60px;
    height: 60px;
    display: grid;
    justify-content: center;
    align-items: center;
}

.header-icon img {
    width: 58.75px;
    height: 27.5px;
}

.formulario {
    display: flex;
    align-items: flex-end;

}

#span-help {
    text-align: center;
    color: #18222F;
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: inherit;
}

@media (max-width: 1400px) {

    .header-section {
        gap: 10px;
    }

    .header-primary-text {
        font-size: 1.7rem;
    }

    .image-overlay {
        font-size: .9rem;

    }

    .formulario {
        display: flex;
        align-items: flex-end;
        width: 30vw;
    }

}

@media (max-width: 1200px) {

    .header-primary-text {
        font-size: 1.55rem;
    }


}

@media (max-width: 960px) {

    .main-container {
        display: block;
    }

    .background-image,
    .image-overlay {
        display: none;
    }

    .header-primary-text {
        font-size: 1.5rem;
    }

    .form-section {
        height: 90vh;
        display: grid;
        grid:
            "header-section" 30% "form-login" 50% "span-help" 20% / 1fr;
        justify-items: center;
    }

    .formulario {
        display: flex;
        align-items: flex-end;
        width: 62vw;
    }

}

@media (max-width: 665px) {

    .formulario {
        width: 60vw;
    }


    .btn-forg {
        font-size: .9rem;
    }

}

@media (max-width: 520px) {

    .header-section {
        grid-template-columns: 15vw 60vw;
    }

    .header-primary-text {
        font-size: 1.3rem;
    }

    .formulario {
        width: 82vw;
    }

}
</style>
