import { Outlet } from "react-router-dom";
import Navs from "./Navs";
import AppTitle from "./AppTitle";


const MainLayout = () => {
    return (
        <div>
            {/* This is sharred markup */}

            <AppTitle />
            <Navs />
            <Outlet />
        </div>
    )
};

export default MainLayout;