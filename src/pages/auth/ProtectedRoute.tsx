import { useAuth } from '../../context/AuthProvider.js';
import { h, useEffect } from '../../core/roboto.js';
import { getRouter } from '../../utils/router.js';


export const ProtectedRoute = ({ children }: { children: any }) => {
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    if (isAuthenticated) {
      const router = getRouter();
      router.navigate('/login');
    }
  }, [isAuthenticated]);
  
  // if (!isAuthenticated) {
  //   return <div>Redirecting to login...</div>;
  // }

  return children;
};