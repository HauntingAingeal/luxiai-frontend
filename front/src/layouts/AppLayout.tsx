import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Sidebar/Topbar"; // <-- CAMINHO CORRETO
import "./AppLayout.css";

export default function AppLayout() {
  return (
    <div className="layout">
      <Topbar />

      <div className="content-area">
        <Sidebar />
        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
