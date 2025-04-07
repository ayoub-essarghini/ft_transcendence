import { SideBar } from "../components/SideBar.js";
import { h } from "../core/roboto.js";


export const Layout = ({ children }:{children:any}) => {

    return (
        <div class="w-full h-screen flex items-center bg-[var(--color-primary)]">
            <SideBar/>
            <div class="p-4 justify-center items-center flex m-auto">
                {children}
          
            </div>
       
        </div>
    );
}


