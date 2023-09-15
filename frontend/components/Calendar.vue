<template>
    <div id="container-calendar">
        <v-btn type=”button” id="authorize_button" @click='handleAuthClick'>Ver Eventos</v-btn>
        <DatePicker :attributes='event' id="app" rows="2" columns="2" v-if="showEvent" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import 'v-calendar/dist/style.css';
import { DatePicker } from 'v-calendar';


useHead({
    script: [
        {
            async: true,
            defer: true,
            src: 'https://apis.google.com/js/api.js',
        },
        {
            async: true,
            defer: true,
            src: 'https://accounts.google.com/gsi/client',
        }
    ]

})

let tokenClient;
const gisInited = ref(false);
const showEvent = ref(false);

const CLIENT_ID = "443279927884-8lhkq84ap1l3jtdpb59h1cmflh2lbq1l.apps.googleusercontent.com";
const API_KEY = "AIzaSyCS_fB_c6iS0e3NkRaUgNVkv58CJezM-Fk";
const DISCOVERY_DOCS = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'

const colores = {
    "1": "indigo",
    "2": "green",
    "3": "purple",
    "4": "pink",
    "8": "gray",
    "10": "teal",
    "11": "red",
    "undefined": "blue",
}

let event = []

function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '',
    });
    gisInited.value = true;
}

function handleClientLoad() {
    gapi.load('client', initClient);
};

async function initClient() {
    await gapi.client
        .init({
            apiKey: API_KEY,
            discoveryDocs: [DISCOVERY_DOCS],
        })
};

function handleAuthClick() {
    tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
            throw (resp);
        }
        document.getElementById('authorize_button').innerText = 'Refresh';
        await listUpcomingEvents();
    };
    if (gapi.client.getToken() === null) {
        tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
        tokenClient.requestAccessToken({ prompt: '' });
    }
};


async function listUpcomingEvents() {
    let response;
    try {
        const request = {
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 126,
            'orderBy': 'startTime',
        };
        response = await gapi.client.calendar.events.list(request);
    } catch (err) {
        console.log({ err });
        return;
    }
    showEvent.value = true
    const events = response.result.items;
    if (!events || events.length == 0) {
        return;
    }

    events.forEach(e => {
        event.push({
            dot: true,
            popover: {
                label: e.summary,
            },
            dates: new Date(e.start.dateTime)
        })

    });

}

onMounted(() => {
    handleClientLoad();
    gisLoaded()
});

</script >

<style>
#container-calendar {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#container-calendar button{
    margin-bottom: 3rem;
}

.vc-container,
.vc-container #app {
    width: 80vw;

}
</style>