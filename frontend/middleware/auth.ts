export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return;
  const token = localStorage.getItem("token");
  if (!token) {
    return navigateTo("/");
  }
});
