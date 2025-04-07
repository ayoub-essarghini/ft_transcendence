import { Route } from "./utils/router.js";
import { Dashboard } from "./components/Dashboard.js";
import { Login } from "./pages/auth/Login.js";
import { NotFound } from "./pages/NotFound.js";
import { Signup } from "./pages/auth/Signup.js";
import { LeaderBoard } from "./components/LeaderBoard.js";
import { UserProfile } from "./components/UserProfile.js";
import { PublicRoute } from "./pages/middlewares/PublicRoute.js";


export const routes: Route[] = [
  {
    path: "/",
    component: ({ params, query }) => Dashboard(),
    meta: {
      requiresAuth: true,
      title: "Dashboard - Ping Pong"
    }
  },
  {
    path: "/login",
    component: ({ params, query }) => PublicRoute({children: Login()}),
    meta: {
      guestOnly: true,
      title: "Login - Ping Pong"
    }
  },
  {
    path: "/register",
    component: ({ params, query }) => PublicRoute({children: Signup()}) ,
    meta: {
      guestOnly: true,
      title: "Sign Up - Ping Pong"
    }
  },
  {
    path: "/board",
    component: ({ params, query }) => LeaderBoard(),
    meta: {
      requiresAuth: true,
      title: "Leaderboard - Ping Pong"
    }
  },
  {
    path: "/dashboard",
    component: ({ params, query }) => Dashboard(),
    meta: {
      requiresAuth: true,
      title: "Dashboard - Ping Pong"
    }
  },
  {
    // Route with parameter example
    path: "/user/:username",
    component: ({ params }) => UserProfile({ username: params.username }),
    meta: {
      requiresAuth: true,
      title: "User Profile - Ping Pong"
    }
  },
  {
    path: "/*",
    component: () => NotFound(),
    meta: {
      title: "Page Not Found - Ping Pong"
    }
  }
];