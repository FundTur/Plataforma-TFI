<template>
    <Navbar v-model:optionsMenu="optionsMenu" />
    <!-- <Calendar /> -->
    <div class="container-scroll">
        <VInfiniteScroll mode="manual" height="90vh">
            <div  v-for="(cards, mes) in groupedItems" :key="mes">
                <FechaCard :fecha="mes" />
                <div class="card-container">
                    <CardView class="CardView" v-for="(card, index) in cards" :key="index" :cardData="card" />
                </div>
            </div>
        </VInfiniteScroll>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { VInfiniteScroll } from 'vuetify/labs/VInfiniteScroll'

const { t } = useI18n();

const optionsMenu = {
    secundaryTitle: t('dashboard.Main'),
    primaryTitle: t('Recruitment'),
    src: "/img/calendar.svg",
}

let items = [
    {
        fecha: "2023-10-01",
        title: "Tarjeta 1",
        chips: ["Travel,Nature,Climb"],
        content: "Contenido de la tarjeta 1",
        price: "12"
    },
    {
        fecha: "2023-10-02",
        title: "Tarjeta 2",
        chips: ["Travel,Nature,Climb"],
        content: "Contenido de la tarjeta 2",
        price: "10"
    },
    {
        fecha: "2023-10-03",
        title: "Tarjeta 3", 
        chips: ["Travel,Nature,Climb"],
        content: "Contenido de la tarjeta 3",
        price: "12"
    },
    {
        fecha: "2023-10-04",
        title: "Tarjeta 4",
        chips: ["Travel,Nature,Climb"],
        chips: ["Travel,Nature,Climb"],
        content: "Contenido de la tarjeta 4",
        price: "19.5"
    },
    {
        fecha: "2023-10-05",
        title: "Tarjeta 5",
        chips: ["Travel,Nature,Climb"],
        content: "Contenido de la tarjeta 5",
        price: "12.5"
    },
    {
        fecha: "2023-11-01",
        title: "Tarjeta 6",
        chips: ["Travel,Nature,Climb"],
        content: "Contenido de la tarjeta 6",
        price: "11.5"
    },
    {
        fecha: "2023-11-02",
        title: "Tarjeta 7",
        chips: ["Travel,Nature,Climb"],
        content: "Contenido de la tarjeta 7",
        price: "12.53"
    },
    {
        fecha: "2023-11-03",
        title: "Tarjeta 8",
        chips: ["Travel,Nature,Climb"],
        content: "Contenido de la tarjeta 8",
        price: "11.56"
    },
    {
        fecha: "2023-11-04",
        title: "Tarjeta 9",
        chips: ["Travel,Nature,Climb"] ,
        content: "Contenido de la tarjeta 9",
        price: "19.5"
    }
]

const groupedItems = computed(() => {
    const grouped = {};
    items.forEach(item => {
        const fecha = item.fecha;
        const mes = fecha.split("-")[0] + "/" + fecha.split("-")[1]; // Obtener el mes a partir de la fecha

        if (!grouped[mes]) {
            grouped[mes] = [];
        }
        grouped[mes].push(item);
    });
    return grouped;
}
)

</script>

<style scoped>
.card-container {
    display: flex;
    width: 100%;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
}

.card-container::-webkit-scrollbar {
    height: 4px;
}

.card-container::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
}

.card-container::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}

.card-container::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}

.card-container .CardView {
    flex: 0 0 25%;
    object-fit: cover;
}

.CardView {
    margin: 5px;
    margin-bottom: 1rem;
}

</style>