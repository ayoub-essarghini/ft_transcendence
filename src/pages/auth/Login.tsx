import { h, useState } from "../../core/roboto.js";
import { Bg } from "../../components/Bg.js";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to dashboard
      // router.navigate('/dashboard');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gray-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <Bg />
      
      {/* Header */}
      <header className="relative z-10 w-full py-6 px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-extrabold text-white">
            <span className="text-blue-400">PONG</span> 
            <span className="text-green-400">MASTERS</span>
          </h1>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-6 relative z-10">
        <div className="w-full max-w-md">
          {/* Login Box */}
          <div className="bg-gray-900 bg-opacity-80 border border-gray-800 rounded-lg p-8 shadow-lg relative overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white">Sign In</h2>
              <p className="text-gray-400 text-sm mt-2">Play with friends or join tournaments</p>
            </div>
            
            {/* Social Login Buttons */}
            <div className="space-y-3 mb-6">
              <button className="w-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 border border-gray-700 rounded px-4 py-3 flex items-center justify-center group">
                <img src="./public/assets/images/google.png" alt="Google" className="w-5 h-5 mr-3" />
                <span className="text-gray-200 text-sm group-hover:text-white transition-colors">Continue with Google</span>
              </button>
              
              <button className="w-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 border border-gray-700 rounded px-4 py-3 flex items-center justify-center group">
                <img src="./public/assets/images/intra-logo.png" alt="42" className="w-5 h-5 mr-3" />
                <span className="text-gray-200 text-sm group-hover:text-white transition-colors">Continue with 42 Intranet</span>
              </button>
            </div>
            
            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-gray-900 text-sm text-gray-400">OR</span>
              </div>
            </div>
            
            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <div className="space-y-5">
                <div>
                  <label className="text-gray-300 text-sm font-medium mb-1 block">
                    Email
                  </label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded px-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors" 
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-gray-300 text-sm font-medium">Password</label>
                    <a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
                      Forgot password?
                    </a>
                  </div>
                  <input 
                    type="password"
                    value={password} 
                    onChange={(e: any) => setPassword(e.target.value)}
                    className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded px-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors" 
                    placeholder="••••••••"
                  />
                </div>
                
                <div>
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded transition-all duration-200 relative overflow-hidden ${isLoading ? 'opacity-80' : ''}`}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Signing in...
                      </span>
                    ) : (
                      <span>Sign in</span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 transform translate-y-1 hover:translate-y-0 transition-transform duration-200"></div>
                  </button>
                </div>
              </div>
            </form>
            
            {/* Sign up */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account? 
                <a href="/register" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">
                  Register now
                </a>
              </p>
            </div>
          </div>
          
          {/* Feature highlight */}
          <div className="mt-8 flex justify-center items-center text-gray-500 text-xs space-x-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span>Fast Matchmaking</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>Online Tournaments</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
              </svg>
              <span>Global Leaderboard</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 py-6 px-8 text-center">
        <p className="text-gray-500 text-xs">
          © 2025 Pong Masters | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};