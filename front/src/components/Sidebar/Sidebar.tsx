import { NavLink } from "react-router-dom";
import "./Sidebar.css";


export default function Sidebar() {
return (
<aside className="sidebar">
<h2 className="text-gradient">LuxiAI</h2>
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