import { createApp, h, ComponentInstance, VNode } from '../core/roboto.js'; 
import { routes } from '../routes.js';

export type Route = {
  path: string;
  component: () => VNode;
};

export class Router {
  private routes: Route[];
  private appContainer: HTMLElement;
  private currentInstance: ComponentInstance | null = null;
  private isNavigating: boolean = false;
  private history: string[] = [];  // Keep track of navigation history

  private get currentPath(): string {
    return window.location.pathname;
  }

  constructor(routes: Route[], appContainer: HTMLElement) {
    this.routes = routes;
    this.appContainer = appContainer;
    this.history.push(this.currentPath); // Initialize with current path
    this.init();
  }

  private init(): void {
    window.addEventListener("popstate", () => {
      // Update our history when browser's back/forward buttons are used
      if (!this.history.includes(this.currentPath)) {
        this.history.push(this.currentPath);
      }
      this.route();
    });
    setTimeout(() => this.route(), 0); // Ensure DOM is loaded
  }

  private route(): void {
    if (this.isNavigating) {
      return;
    }
    
    this.isNavigating = true;
    
    const path = this.currentPath;
    let route = this.routes.find((r) => r.path === path);

    if (!route) {
      const wildcardRoute = this.routes.find((r) => r.path === "/*");
      if (wildcardRoute) {
        route = wildcardRoute;
      }
    }

    this.updateNavigationVisibility();

    if (route) {
      // Unmount previous instance if it exists
      if (this.currentInstance) {
        this.currentInstance.unmount();
        this.appContainer.innerHTML = ''; // Clear the container
      }

      // Create a wrapper component that calls the route's component
      const RouteComponent = () => route!.component();

      // Mount the new component
      const app = createApp(RouteComponent);
      this.currentInstance = app.mount(this.appContainer);
    } else {
      // Handle 404 case
      if (this.currentInstance) {
        this.currentInstance.unmount();
        this.appContainer.innerHTML = '';
      }

      const NotFoundComponent = () => h("h1", null, "404 - Page Not Found");
      const app = createApp(NotFoundComponent);
      this.currentInstance = app.mount(this.appContainer);
    }
    
    this.isNavigating = false;
  }

  private updateNavigationVisibility(): void {
    const navElement = document.querySelector('ul') as HTMLElement | null;
    if (navElement) {
      if (this.currentPath === '/login' || 
          (!this.routes.some(r => r.path === this.currentPath) && this.currentPath !== '/')) {
        navElement.style.display = 'none';
      } else {
        navElement.style.display = 'block';
      }
    }
  }

  public navigate(path: string): void {
    if (window.location.pathname !== path) {
      // Add current path to history before navigating
      this.history.push(window.location.pathname);
      // Limit history length to prevent memory issues
      if (this.history.length > 20) {
        this.history.shift();
      }
      
      window.history.pushState({}, "", path);
      this.route();
    }
  }
  
  /**
   * Navigate back to the previous route in history
   * If no history exists, navigates to the fallback path (default: '/')
   */
  public goBack(fallbackPath: string = '/dashboard'): void {
    // Remove current page from history
    if (this.history.length > 0 && this.history[this.history.length - 1] === this.currentPath) {
      this.history.pop();
    }
    
    // Get the last path from history or use fallback
    const previousPath = this.history.pop() || fallbackPath;
    
    // Navigate to the previous path
    window.history.pushState({}, "", previousPath);
    this.route();
  }
}

let routerInstance: Router | null = null;

export function getRouter(): Router {
  if (!routerInstance) {
    const container = document.getElementById('root') as HTMLElement;
    routerInstance = new Router(routes, container);
  }
  return routerInstance;
}