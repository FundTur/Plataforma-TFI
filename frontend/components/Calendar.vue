<template>
    <v-btn type=”button” id="authorize_button" @click='handleAuthClick'>Ver Eventos</v-btn>
    <pre id="content" style="white-space: pre-wrap;">

    </pre>
</template>

<script setup>
import { ref, onMounted } from 'vue';


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


const items = ref(undefined);
let tokenClient;
let gapiInited = false;
let gisInited = false;

const CLIENT_ID = "443279927884-8lhkq84ap1l3jtdpb59h1cmflh2lbq1l.apps.googleusercontent.com";
const API_KEY = "AIzaSyCS_fB_c6iS0e3NkRaUgNVkv58CJezM-Fk";
const DISCOVERY_DOCS = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'

function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
    });
    gisInited = true;
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
    gapiInited = true;
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
            'maxResults': 10,
            'orderBy': 'startTime',
        };
        response = await gapi.client.calendar.events.list(request);
    } catch (err) {
        document.getElementById('content').innerText = err.message;
        return;
    }

    const events = response.result.items;
    if (!events || events.length == 0) {
        document.getElementById('content').innerText = 'No events found.';
        return;
    }
    // Flatten to string to display
    const output = events.reduce(
        (str, event) => `${str}${event.summary} (${event.start.dateTime || event.start.date})\n`,
        'Events:\n');
    document.getElementById('content').innerText = output;
}

onMounted(() => {
    handleClientLoad();
    gisLoaded()
});

</script>
