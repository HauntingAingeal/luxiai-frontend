import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../assets/Book.svg";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="LuxiAI Logo" className="logo-img" />
        <h2 className="text-gradient">LuxiAI</h2>
      </div>

      <nav>
        <ul>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/practice">Practice</NavLink></li>
          <li><NavLink to="/chat">Chat</NavLink></li>
          <li><NavLink to="/flashcards">Flashcards</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}
