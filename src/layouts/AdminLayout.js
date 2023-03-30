import { Outlet } from "react-router-dom";
import NavBar from "../component/common/NavBar";

const AdminLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default AdminLayout;