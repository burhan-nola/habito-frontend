import Link from "next/link";
import React from "react";
import { FaPowerOff } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand">
          <img src="habito.png" width={100} />
        </a>
        <div className="d-flex">
          <FaPowerOff className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
