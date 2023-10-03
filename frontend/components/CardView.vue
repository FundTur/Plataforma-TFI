<template>
    <div>
        <v-hover v-slot="{ isHovering, props }">
            <v-card v-bind="props" :max-width="widthCard" :max-height="heightCard">

                <v-img v-show="showImg" width="416" src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>

                <v-card-text>
                    <h2 class="title-h1">{{ cardData.title }}</h2>
                    <div id="container-chip">
                        <v-chip color="#474697" variant="elevated" size="small">
                            Travel
                        </v-chip>
                        <v-chip color="green" variant="elevated" size="small">
                            Nature
                        </v-chip>
                        <v-chip color="#CC2929" variant="elevated" size="small">
                            Climb
                        </v-chip>
                    </div>
                    <p class="text-p">
                        {{ cardData.content }}
                    </p>
                </v-card-text>

                <v-card-title>
                    <span> {{ $t('Price') }} : $ {{ cardData.price }}</span>
                    <v-btn v-show="showImg" type="submit"   color="#474697" size="large">
                    {{ $t('Subscribe') }}
                </v-btn>
                </v-card-title>

                <v-overlay :model-value="isHovering" contained class="align-center justify-center">
                    <v-btn @click="showCard" variant="flat"><v-icon>mdi-arrow-top-right-bottom-left</v-icon></v-btn>
                </v-overlay>
            </v-card>
        </v-hover>
    </div>
</template>


<script setup lang="ts">

const showImg = ref(false)
const heightCard = ref(274)
const widthCard = ref(416)

function showCard() {
    showImg.value = !showImg.value
    heightCard.value = 700
}

const props = defineProps<{
    cardData:string
}>()

</script>

<style scoped>
.v-card {
    border-radius: 20px;
    border: 1px solid var(--Text-secondary, #4F5464);
    background: #FFF;
}

.v-card-title {
    text-align: center;
    color: var(--Text-secondary, #4F5464);
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.v-card-title button {
border-radius: 12px;

}

#container-chip .v-chip {
    margin-top: .5rem;
    margin-right: .2rem;
}

p {
    height: 90px;
    margin-top: .5rem;
}
</style>