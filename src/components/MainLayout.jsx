import { Outlet } from "react-router-dom";
import Navs from "./Navs";
import AppTitle from "./AppTitle";


const MainLayout = () => {
    return (
        <div>
            {/* This is sharred markup */}
            <Navs />
            <AppTitle />
            <Outlet />
        </div>
    )
};

export default MainLayout;