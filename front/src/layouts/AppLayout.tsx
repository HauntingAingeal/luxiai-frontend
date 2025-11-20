import { Outlet, NavLink } from "react-router-dom";
import "./AppLayout.css";
import Sidebar from "../components/Sidebar/Sidebar";


export default function AppLayout() {
return (
<div className="app-container">
<Sidebar />
<main className="app-main">
<Outlet />
</main>
</div>
);
}