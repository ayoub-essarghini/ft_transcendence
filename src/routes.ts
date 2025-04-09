import { Route } from "./core/router/router.js";
import { Dashboard } from "./pages/Dashboard.js";
import { Login } from "./pages/auth/Login.js";
import { NotFound } from "./pages/NotFound.js";
import { Signup } from "./pages/auth/Signup.js";
import { Leaderboard } from "./pages/LeaderBoard.js";
import { UserProfile } from "./pages/UserProfile.js";
import { PublicRoute } from "./middlewares/PublicRoute.js";
import { Chat } from "./pages/Chat.js";
import { Game } from "./pages/Game.js";


export const routes: Route[] = [
  {
    path: "/",
    component: () => Dashboard(),
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
    component: ({ params, query }) => Leaderboard(),
    meta: {
      requiresAuth: true,
      title: "Leaderboard - Ping Pong"
    }
  },
  {
    path: "/chat",
    component: ({ params, query }) => Chat(),
    meta: {
      requiresAuth: true,
      title: "Chat - Ping Pong"
    }
  },

  {
    path: "/game",
    component: ({ params, query }) => Game(),
    meta: {
      requiresAuth: true,
      title: "Game - Ping Pong"
    }
  },
  {
    path: "/settings",
    component: ({ params, query }) => Game(),
    meta: {
      requiresAuth: true,
      title: "Settings - Ping Pong"
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