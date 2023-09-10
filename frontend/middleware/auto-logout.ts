export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    let inactivityTimer: NodeJS.Timeout;

    function resetInactivityTimer() {
      clearTimeout(inactivityTimer);
      // 3000000
      //TODO: Cronometro desactivado para la fase de desarrollo inactivityTimer = setTimeout(logoutUser, 60000);
    }

    function logoutUser() {
      localStorage.removeItem("Sesion");
      console.log("Espera");
      navigateTo("/");
    }

    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("keydown", resetInactivityTimer);
    window.addEventListener("scroll", resetInactivityTimer);

    resetInactivityTimer();
  }
});
