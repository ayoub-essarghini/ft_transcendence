import { ComponentInstance, createApp, h, VNode } from "../core/roboto.js";
import { auth } from "../services/auth.js";


export type RouteParams = Record<string, string>;

export type RouteProps = {
  params: RouteParams;
  query: Record<string, string>;
};

export interface RouteHandler {
  (props: RouteProps): VNode;
}

export type Route = {
  path: string;
  component: RouteHandler;
  exact?: boolean;
  meta?: {
    requiresAuth?: boolean;
    guestOnly?: boolean;
    title?: string;
    [key: string]: any;
  };
};

export class Router {
  private routes: Route[];
  private appContainer: HTMLElement;
  private currentInstance: ComponentInstance | null = null;
  private isNavigating: boolean = false;
  private history: string[] = [];
  private currentParams: RouteParams = {};
  private currentQuery: Record<string, string> = {};

  private get currentPath(): string {
    return window.location.pathname;
  }



  constructor(routes: Route[], appContainer: HTMLElement) {
    this.routes = routes;
    this.appContainer = appContainer;
    this.history.push(this.currentPath);
    this.init();
  }

  private init(): void {
    window.addEventListener("popstate", () => {
      if (!this.history.includes(this.currentPath)) {
        this.history.push(this.currentPath);
      }
      this.route();
    });

    // Initial route
    setTimeout(() => this.route(), 0);
  }

  /**
   * Matches a URL path to a route pattern and extracts parameters
   */
  private matchRoute(path: string, routePath: string): { match: boolean; params: RouteParams } {
    // Handle exact routes first
    if (routePath === path) {
      return { match: true, params: {} };
    }

    const routeParts = routePath.split('/').filter(Boolean);
    const pathParts = path.split('/').filter(Boolean);

    // Quick length check (excluding parameters)
    const staticRouteParts = routeParts.filter(part => !part.startsWith(':'));
    if (pathParts.length < staticRouteParts.length) {
      return { match: false, params: {} };
    }

    // Handle wildcard routes
    if (routePath === '/*' || routePath === '*') {
      return { match: true, params: {} };
    }

    // Check if the route has the right number of segments
    if (routeParts.length !== pathParts.length && !routePath.includes('*')) {
      return { match: false, params: {} };
    }

    const params: RouteParams = {};
    let match = true;

    for (let i = 0; i < routeParts.length; i++) {
      const routePart = routeParts[i];
      const pathPart = pathParts[i];

      // Handle parameters
      if (routePart.startsWith(':')) {
        const paramName = routePart.slice(1);
        params[paramName] = pathPart;
        continue;
      }

      // Handle wildcard at the end
      if (routePart === '*') {
        return { match: true, params };
      }

      // Regular path segment comparison
      if (routePart !== pathPart) {
        match = false;
        break;
      }
    }

    return { match, params };
  }

  /**
   * Parse query parameters from URL
   */
  private parseQuery(url: string): Record<string, string> {
    const queryString = url.split('?')[1];
    if (!queryString) return {};

    const query: Record<string, string> = {};
    const pairs = queryString.split('&');

    for (const pair of pairs) {
      const [key, value] = pair.split('=');
      if (key) {
        query[decodeURIComponent(key)] = decodeURIComponent(value || '');
      }
    }

    return query;
  }

  /**
   * Find the matching route for the current path
   */
  private findMatchingRoute(): { route: Route | undefined; params: RouteParams; query: Record<string, string> } {
    const path = this.currentPath;
    const query = this.parseQuery(window.location.search);

    // First try exact matches
    for (const route of this.routes) {
      if (route.exact && route.path === path) {
        return { route, params: {}, query };
      }
    }

    // Then try parameter matches
    for (const route of this.routes) {
      const { match, params } = this.matchRoute(path, route.path);
      if (match) {
        return { route, params, query };
      }
    }

    // Finally, look for a catch-all route
    const notFoundRoute = this.routes.find(r => r.path === '/*' || r.path === '*');
    return { route: notFoundRoute, params: {}, query };
  }

  private route(): void {
    if (this.isNavigating) {
      return;
    }
    this.isNavigating = true;
    const { route, params, query } = this.findMatchingRoute();

    this.currentParams = params;
    this.currentQuery = query;

    if (route) {
      
      // if (route.meta?.requiresAuth && !auth.isAuthenticated()) {
      //   console.log("Protected route - redirecting to login");
      //   this.isNavigating = false; // Reset before redirecting
      //   this.navigateTo('/login', true);
      //   return;
      // }
      
      // if (route.meta?.guestOnly && auth.isAuthenticated()) {
      //   console.log("Already authenticated - redirecting to dashboard");
      //   this.isNavigating = false; // Reset before redirecting
      //   this.navigateTo('/dashboard', true);
      //   return;
      // }


      if (route.meta?.title) {
        document.title = route.meta.title;
      }

      // Unmount the previous component if it exists
      if (this.currentInstance) {
        this.currentInstance.unmount();
        this.appContainer.innerHTML = '';
      }

      // Create a wrapper component that calls the route component with params
      const RouteComponent = () => route.component({ params, query });

      // Mount the new component
      const app = createApp(RouteComponent);
      this.currentInstance = app.mount(this.appContainer);
    } else {
      // Handle 404 case
      if (this.currentInstance) {
        this.currentInstance.unmount();
        this.appContainer.innerHTML = '';
      }

      const NotFoundComponent = () => h("div", { className: "not-found" });

      const app = createApp(NotFoundComponent);
      this.currentInstance = app.mount(this.appContainer);
    }

    this.isNavigating = false;
  }

  /**
   * Navigate to a new route
   */
  public navigate(path: string): void {
    if (window.location.pathname !== path) {
      this.navigateTo(path);
    }
  }

  /**
   * Navigates to a path with optional redirect flag to prevent adding to history
   */
  private navigateTo(path: string, isRedirect: boolean = false): void {
    if (!isRedirect) {
      
      this.history.push(window.location.pathname);

      if (this.history.length > 20) {
        this.history.shift();
      }
    }

    window.history.pushState({}, "", path);
    this.route();
  }

  /**
   * Navigate back to the previous route in history
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



  /**
   * Get current route parameters
   */
  public getParams(): RouteParams {
    return this.currentParams;
  }

  /**
   * Get current query parameters
   */
  public getQuery(): Record<string, string> {
    return this.currentQuery;
  }

  /**
   * Generate a URL with parameters
   */
  public generateUrl(path: string, params?: RouteParams, query?: Record<string, string>): string {
    let url = path;

    // Replace path parameters
    if (params) {
      Object.keys(params).forEach(key => {
        url = url.replace(`:${key}`, encodeURIComponent(params[key]));
      });
    }

    // Add query parameters
    if (query && Object.keys(query).length > 0) {
      const queryString = Object.keys(query)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
        .join('&');

      url += `?${queryString}`;
    }

    return url;
  }
}