import { useAuth } from '../../context/AuthProvider.js';
import { h, useEffect } from '../../core/roboto.js';
import { getRouter } from '../../utils/router.js';


export const PublicRoute = ({ children }: { children: any }) => {
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    if (isAuthenticated) {
      const router = getRouter();
      router.goBack();
    }
  }, [isAuthenticated]);

  return children;
};
