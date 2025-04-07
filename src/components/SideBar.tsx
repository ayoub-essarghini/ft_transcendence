import { h, useState, useEffect } from '../core/roboto.js';
import { Link } from './Link.js';

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
    { path: "/", label: "Home", icon: "public/assets/images/sideBar/home.svg" },
    { path: "/board", label: "Leaderboard", icon: "public/assets/images/sideBar/rank.svg" },
    { path: "/chat", label: "Chat", icon: "public/assets/images/sideBar/chat.svg" },
    { path: "/settings", label: "Settings", icon: "public/assets/images/sideBar/setting.svg" },
    { path: "/logout", label: "Settings", icon: "public/assets/images/sideBar/logout.svg" },
  ];



  return (
    <div class="flex flex-col items-center h-screen bg-gradient-to-t from-[#006eff5a] to-[#20265e05] text-white p-2 gap-5 border-r border-[#ffffff59] ">
      <div class="flex items-center justify-center">

      </div>
      {navLinks.map((link) => {

        return (
          <div className="flex justify-center items-center flex-row gap-2" >
            {link.path === activePath && (
              <div className="w-1 h-10 bg-[#fff] rounded-lg absolute transition-all duration-300 ease-in-out" style={{ left: '0' }} />
            )}

            <Link
              to={link.path}
              key={link.label}
              className={`flex p-4 rounded-xl border border-[#fff] transition-all duration-300
              ${link.path === '/logout' ? 'absolute bottom-10' : 'relative'}
            ${activePath === link.path
                  ? 'bg-gradient-to-tl from-[#001AFF] to-[#00FFF0]'
                  : 'bg-[var(--color-primary)] hover:bg-gradient-to-tl hover:from-[#001AFF] hover:to-[#00FFF0]'
                }`}
              children={<div className="flex items-center gap-4 relative group">
                <img src={link.icon} alt={link.label} className="h-6 w-6" />
                <span className="absolute -right-24 transition-all duration-500 ease-in-out hidden group-hover:flex justify-start z-10">{link.label}</span>
              </div>}
            />
          </div>

        )

      })}

    </div>
  );
};