"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FaPowerOff } from "react-icons/fa";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function Navbar() {
  const { push } = useRouter();
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand">
          <img src="habito.png" width={100} />
        </a>
        <div className="d-flex">
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              Cookies.remove("userData");
              push("/login");
            }}
          >
            <FaPowerOff className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
