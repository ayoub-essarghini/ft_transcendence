import { h, useEffect, useState } from '../../core/roboto.js';
import { auth } from '../../services/auth.js';
import { getRouter } from '../../utils/router-instance.js';



export const ProtectedRoute = ({ children }: { children: any }) => {
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    try {
      // ProtectedRoute should redirect unauthenticated users to login
      if (!auth.isAuthenticated()) {
        console.log("User is not authenticated, redirecting to login");
        const router = getRouter();
        router.navigate('/login');
      } else {
        setIsReady(true);
      }
    } catch (e) {
      console.error("Router error in ProtectedRoute:", e);
      // If router fails, still show content with proper warning
      setIsReady(true);
    }
  }, []);

  if (!isReady) return <div>Checking authentication...</div>;
  return children;
};