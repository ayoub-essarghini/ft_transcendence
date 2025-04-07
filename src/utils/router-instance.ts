import { Route, Router } from "./router.js";



let routerInstance: Router | null = null;


export function getRouter(): Router {
  if (!routerInstance) {
    throw new Error("Router has not been initialized. Call initRouter() first.");
  }
  return routerInstance;
}


export function initRouter(routes: Route[], container: HTMLElement): Router {
  if (!routerInstance) {
    routerInstance = new Router(routes, container);
  }
  return routerInstance;
}