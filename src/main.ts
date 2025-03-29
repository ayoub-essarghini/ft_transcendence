import { routes } from "./routes.js";
import { Router } from "./utils/router.js";

const appContainer = document.getElementById('root') as HTMLElement;
const router = new Router(routes, appContainer);

// Example navigation (optional)
document.querySelectorAll('a[data-navigate]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Enter here !")
    const path = link.getAttribute('data-navigate')!;
    console.log("Path: ", path)
    alert(`Navigating to ${path}`);
    router.navigate(path);
  });
});