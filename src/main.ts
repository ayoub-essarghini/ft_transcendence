import { routes } from "./routes.js";
import { initRouter } from "./utils/router-instance.js";


const appContainer = document.getElementById('root') as HTMLElement;

const router = initRouter(routes, appContainer);


document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  const link = target.closest('a[data-link]');
  if (!link) return;
  
  event.preventDefault();
  const path = link.getAttribute('data-link');
  if (path) {
    router.navigate(path);
  }
});
