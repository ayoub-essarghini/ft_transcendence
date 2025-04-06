import { h, useState, useEffect } from '../core/roboto.js';

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    const updateActivePath = () => {
      setActivePath(window.location.pathname);
    };
    console.log('activePath', activePath);
    updateActivePath();

  }, []);

  const navLinks = [
    { path: "/", label: "Dashboard", icon: "dashboard" },
    { path: "/board", label: "Leaderboard", icon: "leaderboard" },
    { path: "/tournaments", label: "Tournaments", icon: "tournament" },
    { path: "/friends", label: "Friends", icon: "friends" },
    { path: "/profile", label: "Profile", icon: "profile" },
    { path: "/settings", label: "Settings", icon: "settings" },
  ];



  return (
    <div class={`sidebar fixed h-screen ${isOpen ? 'w-64' : 'w-20'} 
      bg-gradient-to-b from-[var(--color-primary)] to-[#202E9F] 
      text-white transition-all duration-300 shadow-lg border-r border-r-[var(--color-secondary)]
      overflow-hidden z-10`}>
      
      {/* Sidebar Header with Toggle Button */}
      <div class="flex items-center justify-between p-4 border-b border-[rgba(67,148,255,0.3)]">
        {isOpen && (
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-full bg-[var(--color-secondary)] flex items-center justify-center">
              <span class="text-white font-bold">PP</span>
            </div>
            <h2 class="text-xl font-bold">Ping Pong</h2>
          </div>
        )}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          class={`${!isOpen ? 'mx-auto' : ''} p-2 rounded-md text-white hover:bg-[var(--color-secondary)] transition-colors`}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <nav class="mt-6 px-3">
        <ul class="space-y-2">
          {navLinks.map(link => {
            const isActive = activePath === link.path;
            return (
              <li key={link.path}>
                <a 
                  href={link.path}
                  data-link={link.path}
                  class={`flex items-center p-3 rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-[var(--color-secondary)] text-white'
                      : 'hover:bg-[rgba(67,148,255,0.2)] text-gray-200'}`
                  }
                >
            
                  {isOpen && <span class="ml-3 transition-opacity duration-200">{link.label}</span>}
                  {isActive && <span class="ml-auto h-2 w-2 rounded-full bg-white"></span>}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile Section */}
      <div class={`absolute bottom-0 left-0 right-0 p-4 border-t border-[rgba(67,148,255,0.3)] bg-[rgba(0,0,0,0.2)]`}>
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)]
                      flex items-center justify-center text-white font-semibold">
            A
          </div>
          {isOpen && (
            <div class="flex-1 overflow-hidden">
              <h4 class="text-sm font-medium truncate">Ayoub ES</h4>
              <p class="text-xs text-gray-300 truncate">Level 42</p>
            </div>
          )}
          {isOpen && (
            <button class="p-1.5 rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div class="absolute top-32 right-0 h-40 w-40 rounded-full bg-[var(--color-secondary)] opacity-10 -z-10"></div>
      <div class="absolute bottom-40 left-0 h-24 w-24 rounded-full bg-[var(--color-accent)] opacity-10 -z-10"></div>
    </div>
  );
};