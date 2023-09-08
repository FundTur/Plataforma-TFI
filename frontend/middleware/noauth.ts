export default defineNuxtRouteMiddleware((to) => {
  if (process.client) {
    const token = localStorage.getItem("token");
    if (!token && to.fullPath !== "/") {
      return navigateTo("/");
    }
    if (token && to.fullPath === "/") {
      return navigateTo("/dashboard"); // Cambia "/dashboard" a la ruta deseada
    }
  }
});
