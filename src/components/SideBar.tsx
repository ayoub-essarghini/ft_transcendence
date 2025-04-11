import { h, useState, useEffect } from '../core/roboto.js';
import { Link } from '../core/router/Link.js';
import { getRouter } from '../core/router/router-instance.js';
import { auth } from '../services/auth.js';

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    const updateActivePath = () => {
      setActivePath(window.location.pathname);
    };
    // console.log('activePath', activePath);
    updateActivePath();

  }, []);

  const navLinks = [
    { path: "/", label: "Home", icon: "public/assets/images/sideBar/home.svg" },
    { path: "/board", label: "Leaderboard", icon: "public/assets/images/sideBar/rank.svg" },
    { path: "/chat", label: "Chat", icon: "public/assets/images/sideBar/chat.svg" },
    { path: "/game", label: "Game", icon: "public/assets/images/sideBar/paddle.svg" },
    { path: "/settings", label: "Settings", icon: "public/assets/images/sideBar/setting.svg" },
    // { path: "/logout", label: "Logout", icon: "public/assets/images/sideBar/logout.svg" },
  ];
  const handleLogout = (e: any) => {
    e.preventDefault();
    auth.logout();
    getRouter().navigate('/login');

  };


  return (
    <div class="flex flex-col items-center h-screen text-white p-1 gap-5 border-r border-[#ffffff59] shadow-md shadow-[var(--color-accent)]">

      <div className="w-20 h-20 z-12">
        <img src="public/assets/images/logo.png" alt="" />
      </div>
      {navLinks.map((link) => {

        return (
          <div className="flex justify-center items-center flex-row gap-2" >
            {link.path === activePath && (
              <div className="w-1 h-8 mx-2 bg-[#fff] rounded-lg absolute transition-all duration-300 ease-in-out " style={{ left: '0' }} />
            )}

            <Link
              to={link.path == '/logout' ? '#' : link.path}
              key={link.label}

              className={`flex p-4 rounded-xl transition-all duration-300
              ${link.path === '/logout' ? 'absolute bottom-10' : 'relative'}
            ${activePath === link.path
                  ? 'bg-gradient-to-tl from-[#001AFF] to-[var(--color-accent)] shadow-none shadow-[#0000]'
                  : 'bg-[var(--color-primary)] hover:bg-gradient-to-tl hover:from-[#001AFF] hover:to-[var(--color-accent)] shadow-sm shadow-[#0fff]  '}
                }`}
              children={<div className="flex justify-start items-center gap-4 relative group">
                <img src={link.icon} alt={link.label} className="h-5 w-5 text-white" />
                <span className="translate-x-14 text-sm hidden absolute text-black transition-all duration-500 ease-in-out bg-white px-2 py-1 rounded-lg group-hover:flex justify-start z-10">{link.label}</span>
              </div>}
            />
          </div>
        )
      })}

    </div>
  );
};