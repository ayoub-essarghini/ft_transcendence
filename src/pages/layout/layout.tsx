import { SideBar } from "../../components/SideBar.js";
import { h } from "../../core/roboto.js";


export const Layout = ({ children }:{children:any}) => {

    return (
        <div class="w-full h-screen flex bg-[var(--color-primary)]">
            <SideBar/>
            <div class="w-full">
                {children}
          
            </div>
       
        </div>
    );
}


