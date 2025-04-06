import {
  h,
  createContext,
  useState,
  useEffect,
  useContext,
} from "../core/roboto.js";


interface User {
  id: number;
  username: string;
  email?: string;
}


interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => false,
  logout: () => {},
});


export function AuthProvider({ children }: { children: any }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  // Mock login function
  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

   
    if (username === "admin" && password === "admin123") {
        console.log("Was done", " By ",username, password)
      const mockUser = {
        id: 1,
        username: "admin",
        email: "admin@example.com",
      };

      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(mockUser));

      setUser(mockUser);
      setIsAuthenticated(true);
      return true;
    }

    return false;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  // Provide loading state until auth check is complete
  if (isLoading) {
    return <div>Loading authentication status...</div>;
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout }}
      children={children}
    />
  );
}


export const useAuth = () => useContext(AuthContext);
