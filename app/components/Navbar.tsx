"use client";
import React, { useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

function Navbar() {
  const [loading, isLoading] = useState(false);
  const { push } = useRouter();
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand">
          <img src="habito.png" width={100} />
        </a>
        <div className="d-flex">
          {loading ? (
            <Loader />
          ) : (
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                isLoading(true);
                Cookies.remove("userData");
                push("/login");
              }}
            >
              <FaPowerOff className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
