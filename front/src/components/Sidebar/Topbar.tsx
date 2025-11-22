import "./Topbar.css";
import Book from "../../../public/Book.svg";

import { Moon, LogOut } from "lucide-react";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="left">
        <img src={Book} className="topbar-logo" />
        <span className="brand">LUXIAI</span>
      </div>

      <div className="right">
        <Moon className="topbar-icon" />
      </div>
    </header>
  );
}
