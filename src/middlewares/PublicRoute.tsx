import { h, useEffect, useState } from "../core/roboto.js";
import { getRouter } from "../core/router/router-instance.js";
import { auth } from "../services/auth.js";

export const PublicRoute = ({ children }: { children: any }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      if (auth.isAuthenticated()) {
        console.log("User is already authenticated, redirecting to dashboard");
        const router = getRouter();
        router.navigate('/dashboard');
      } else {
        setIsReady(true);
      }
    } catch (e) {
      console.error("Router error in PublicRoute:", e);
      setIsReady(true);
    }
  }, []);

  if (!isReady) return <div>Loading...</div>;
  return children;
};