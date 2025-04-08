import { h, useEffect, useState } from "../core/roboto.js";
import { getRouter } from "../core/router/router-instance.js";
import { auth } from "../services/auth.js";




export const ProtectedRoute = ({ children }: { children: any }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {

      if (!auth.isAuthenticated()) {
        console.log("User is not authenticated, redirecting to login");
        const router = getRouter();
        router.navigate('/login');
      } else {
        setIsReady(true);
      }
    } catch (e) {
      console.error("Router error in ProtectedRoute:", e);

      setIsReady(true);
    }
  }, []);

  if (!isReady) return <div>Checking authentication...</div>;
  return children;
};