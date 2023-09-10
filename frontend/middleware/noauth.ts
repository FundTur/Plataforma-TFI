export default defineNuxtRouteMiddleware((to) => {
  if (process.client) {
    const token = localStorage.getItem("Sesion");
    if (!token) {
      if (to.fullPath !== "/") {
        return navigateTo("/");
      }
    }
  }
});
