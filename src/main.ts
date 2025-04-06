import { AuthProvider } from "./context/AuthProvider.js";
import { h, createApp } from "./core/roboto.js";
import { routes } from "./routes.js";
import { Router } from "./utils/router.js";


const appContainer = document.getElementById('root') as HTMLElement;

const router = new Router(routes, appContainer);

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  const link = target.closest('a[data-link]');
  if (!link) return;
  
  event.preventDefault();
  const path = link.getAttribute('data-link');
  if (path) {
    console.log('Navigating to:', path);
    router.navigate(path);
  }
});