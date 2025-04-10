import { SideBar } from "../../components/SideBar.js";
import { h, useEffect, useState } from "../../core/roboto.js";

export const Layout = ({ children,title }: { children: any,title?:string }) => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  // const [isClient, setIsClient] = useState(false)

  // useEffect(() => {
  //   setIsClient(true)

  //   const handleMouseMove = (e: MouseEvent) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY })
  //   }

  //   window.addEventListener("mousemove", handleMouseMove)

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove)
  //   }
  // }, [])

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="w-full h-auto flex bg-[var(--color-primary)] relative">
      <SideBar />
      <div className="w-full h-screen flex flex-col bg-gray-900">
      <div className="flex flex-row justify-between">
        <h1 className="py-4 text-2xl font-semibold xl:px-16 md:px-10 text-white">{title}</h1>

        <div className="relative flex items-center justify-center right-32 cursor-pointer"  onClick={toggleDropdown}>
          {/* Notification Badge */}
          <div className="badge bg-red-500 translate-x-2 absolute top-2 right-0 font-semibold text-white rounded-full p-2 h-5 w-5 flex items-center justify-center z-10">
            <span className='text-[0.8rem]'>+9</span>
          </div>

          {/* Bell Icon */}
          <i
            className="fa-solid py-4 fa-bell text-2xl text-white"
           
          ></i>

          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute top-12 right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-20 justify-center items-center">
              <ul className="py-2 text-sm text-gray-700 items-center">
                <li className="px-4 py-2 hover:bg-gray-100 items-center">No Notification</li>
                
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="w-full animate-fade-in-up ">{children}</div>
    </div>
      {/* <CursorLight mousePosition={mousePosition} /> */}
    </div>
  );
};