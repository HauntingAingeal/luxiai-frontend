import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { LayoutDashboard, MessageSquare, Layers, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" className="nav-item">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/chat" className="nav-item">
              <MessageSquare size={18} />
              <span>Chat</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/flashcards" className="nav-item">
              <Layers size={18} />
              <span>Flashcards</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/practice" className="nav-item">
              <Settings size={18} />
              <span>Practice</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
