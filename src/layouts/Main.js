import { Outlet } from "react-router-dom";
import NavBar from "../component/common/NavBar";

const Main = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default Main;