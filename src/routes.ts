import { Route } from './utils/router.js';
import { App } from './components/App.js';
import { Login } from './pages/auth/Login.js';
import { NotFound } from './pages/NotFound.js';
import { Signup } from './pages/auth/Signup.js';


export const routes: Route[] = [
  { path: "/", component: () => App() },
  { path: "/register", component: () => Signup() },
  { path: "/login", component: () => Login() },
  { path: "/*", component:() => NotFound() },
];