import { Route } from "./utils/router.js";
import { App } from "./components/App.js";
import { Login } from "./pages/auth/Login.js";
import { NotFound } from "./pages/NotFound.js";
import { Signup } from "./pages/auth/Signup.js";
import { LeaderBoard } from "./components/LeaderBoard.js";
import { Dashboard } from "./components/Dashboard.js";
import { ProtectedRoute } from "./pages/auth/ProtectedRoute.js";

export const routes: Route[] = [
  { path: "/", component: () => ProtectedRoute({ children: App() }) },
  { path: "/register", component: () => Signup() },
  {
    path: "/board",
    component: () => ProtectedRoute({ children: LeaderBoard() }),
  },
  { path: "/login", component: () => Login() },
  {
    path: "/dashboard",
    component: () => ProtectedRoute({ children: Dashboard() }),
  },
  { path: "/*", component: () => NotFound() },
];
