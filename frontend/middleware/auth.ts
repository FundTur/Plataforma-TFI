export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const token = localStorage.getItem("Sesion");
    if (!token) {
      return navigateTo("/login");
    }
  }
});
