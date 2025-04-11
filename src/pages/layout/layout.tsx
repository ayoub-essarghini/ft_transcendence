import { SideBar } from "../../components/SideBar.js";
import { h, useEffect, useState } from "../../core/roboto.js";

export const Layout = ({ children, title }: { children: any, title?: string }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const ballSize = 200;
      const offsetX = ballSize / 2;
      const offsetY = ballSize / 2;

      setPosition({
        top: e.clientY - offsetY,
        left: e.clientX - offsetX,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="w-full h-auto flex bg-[var(--color-card-background)] relative overflow-hidden">
      <div className="z-10">

        <SideBar />
      </div>
      <div className="w-full h-screen flex flex-col z-10">
        <div className="flex flex-row justify-between">
          
          <h1 className="py-4 text-2xl font-semibold xl:px-16 md:px-10 text-white">{title}</h1>

          <div className="flex flex-row items-center justify-center gap-6 px-4 -translate-x-20 z-40">

            <div className="relative flex items-center justify-center top-1 cursor-pointer" onClick={toggleDropdown}>
              <div className="badge bg-[var(--color-secondary)] translate-x-2 absolute top-2 right-0 font-semibold text-white rounded-full p-2 h-5 w-5 flex items-center justify-center z-10">
                <span className='text-[0.8rem]'>+9</span>
              </div>

              <i
                className="fa-solid py-4 fa-bell text-2xl text-white"

              ></i>

              {showDropdown && (
                <div className="absolute top-12 right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-20 justify-center items-center">
                  <ul className="py-2 text-sm text-gray-700 items-center">
                    <li className="px-4 py-2 hover:bg-gray-100 items-center">No Notification</li>

                  </ul>
                </div>
              )}
            </div>

            <div className="profile cursor-pointer flex flex-row justify-center items-center gap-2" onClick={() => setShowProfile(!showProfile)}>
              <div className="w-10 h-10 rounded-full border border-[var(--color-secondary)] overflow-hidden items-center justify-center">

                <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="profile" />

              </div>

              <div className="flex flex-row items-center gap-1 relative ">
                <span className="text-[1rem] font-semibold cursor-pointer text-white">Ahmed Ali</span>
                <i class="fa-solid fa-caret-down text-white text-sm"></i>
                {showProfile && (
                  <div className="absolute top-6 -right-5 mt-2 w-36 bg-white rounded-lg shadow-lg z-20 justify-center items-center">
                    <ul className="py-1 text-sm text-gray-700 items-center">
                      <li className="px-2 py-1 hover:bg-gray-100 items-center rounded-lg"><i class="fa-solid fa-user mr-2"></i> Profile</li>
                      <li className="px-2 py-1 hover:bg-gray-100 items-center rounded-lg"><i class="fa-solid fa-gear mr-2"></i>Settings</li>
                      <li className="px-2 py-1 hover:bg-gray-100 items-center rounded-lg"><i class="fa-solid fa-right-from-bracket mr-2"></i> Logout</li>


                    </ul>
                  </div>
                )}
              </div>

            </div>

          </div>


        </div>

        <div className="w-full animate-fade-in-up z-10">{children}</div>
      </div>
      <div
        className="w-[200px] h-[200px] rounded-full bg-[#00aeff91] blur-[6rem] z-0 transition-all duration-200 ease-out pointer-events-none"
        style={{
          position: 'absolute',
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      ></div>
      <div
        className="w-[400px] h-[400px] rounded-full bg-[#00aeff91] blur-[10rem] z-0 transition-all duration-200 ease-out pointer-events-none"
        style={{
          position: 'absolute',
          top: `0`,
          right: `-100px`,
        }}
      ></div>

      <div
        className="w-[300px] h-[300px] rounded-full bg-[#00aeff91] blur-[10rem] z-0 transition-all duration-200 ease-out pointer-events-none"
        style={{
          position: 'absolute',
          bottom: `0`,
          left: `-100px`,
        }}
      ></div>
    </div>
  );
};