import axios from 'axios';

const API_BASE_URL = 'https://api.calendly.com/';
const API_KEY = 'TU_API_KEY'; //

async function obtenerEventosDeCalendario() {
    try {
      const response = await axios.get(`${API_BASE_URL}aquivalarutadelaapijaja`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
  
      // Procesar la respuesta de la API 
      //Notificaciones de correo
      console.log(response.data);
    } catch (error) {
      console.error('Error al obtener eventos:', error);
    }
  }
  
  obtenerEventosDeCalendario();
  