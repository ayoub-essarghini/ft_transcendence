import { h, useState } from "../../core/roboto.js";
import { Bg } from "../../components/Bg.js";

export const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!username.trim()) newErrors.username = "Username is required";
    else if (username.length < 3) newErrors.username = "Username must be at least 3 characters";
    
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
    
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to dashboard
      // router.navigate('/dashboard');
    }, 1500);
  };

  const goToLogin = () => {
    // Navigate to login page
    // router.navigate('/login');
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
          {/* Register Box */}
          <div className="bg-gray-900 bg-opacity-80 border border-gray-800 rounded-lg p-8 shadow-lg relative overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white">Create Account</h2>
              <p className="text-gray-400 text-sm mt-2">Join the ultimate Pong experience</p>
            </div>
            
            {/* Social Register Buttons */}
            <div className="space-y-3 mb-6">
              <button className="w-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 border border-gray-700 rounded px-4 py-3 flex items-center justify-center group">
                <img src="./public/assets/images/google.png" alt="Google" className="w-5 h-5 mr-3" />
                <span className="text-gray-200 text-sm group-hover:text-white transition-colors">Sign up with Google</span>
              </button>
              
              <button className="w-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 border border-gray-700 rounded px-4 py-3 flex items-center justify-center group">
                <img src="./public/assets/images/intra-logo.png" alt="42" className="w-5 h-5 mr-3" />
                <span className="text-gray-200 text-sm group-hover:text-white transition-colors">Sign up with 42 Intranet</span>
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
            
            {/* Registration Form */}
            <form onSubmit={handleRegister}>
              <div className="space-y-4">
                {/* Username field */}
                <div>
                  <label className="text-gray-300 text-sm font-medium mb-1 block">
                    Username
                  </label>
                  <input 
                    type="text" 
                    value={username}
                    onChange={(e: any) => setUsername(e.target.value)}
                    className={`w-full bg-gray-800 text-gray-200 border ${errors.username ? 'border-red-500' : 'border-gray-700'} rounded px-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder="Choose a username"
                  />
                  {errors.username && (
                    <p className="mt-1 text-sm text-red-500">{errors.username}</p>
                  )}
                </div>
                
                {/* Email field */}
                <div>
                  <label className="text-gray-300 text-sm font-medium mb-1 block">
                    Email
                  </label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    className={`w-full bg-gray-800 text-gray-200 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded px-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                
                {/* Password field */}
                <div>
                  <label className="text-gray-300 text-sm font-medium mb-1 block">
                    Password
                  </label>
                  <input 
                    type="password"
                    value={password} 
                    onChange={(e: any) => setPassword(e.target.value)}
                    className={`w-full bg-gray-800 text-gray-200 border ${errors.password ? 'border-red-500' : 'border-gray-700'} rounded px-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder="Create a password"
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                  )}
                </div>
                
                {/* Confirm Password field */}
                <div>
                  <label className="text-gray-300 text-sm font-medium mb-1 block">
                    Confirm Password
                  </label>
                  <input 
                    type="password"
                    value={confirmPassword} 
                    onChange={(e: any) => setConfirmPassword(e.target.value)}
                    className={`w-full bg-gray-800 text-gray-200 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-700'} rounded px-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                  )}
                </div>
                
                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2 mt-4">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="mt-1 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="text-gray-400 text-xs">
                    By creating an account, you agree to the <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a> and <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
                  </label>
                </div>
                
                {/* Register Button */}
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
                        Creating account...
                      </span>
                    ) : (
                      <span>Create Account</span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 transform translate-y-1 hover:translate-y-0 transition-transform duration-200"></div>
                  </button>
                </div>
              </div>
            </form>
            
            {/* Already have an account? */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Already have an account? 
                <a 
                  href="#" 
                  onClick={(e:any) => { e.preventDefault(); goToLogin(); }} 
                  className="text-blue-400 hover:text-blue-300 ml-1 transition-colors"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
          
          {/* Game features */}
          <div className="mt-8 flex justify-center items-center text-gray-500 text-xs">
            <div className="flex items-center px-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free to play</span>
            </div>
            <div className="border-r border-gray-700 h-4"></div>
            <div className="flex items-center px-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Competitive rankings</span>
            </div>
            <div className="border-r border-gray-700 h-4"></div>
            <div className="flex items-center px-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Weekly tournaments</span>
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