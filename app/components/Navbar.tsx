"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar, Nav } from "react-bootstrap";
import Cookies from "js-cookie";

const NavbarComponent = () => {
  const { push } = useRouter();
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <div className="container">
        <Navbar.Brand href="#">
          <img
            src="/habito.png"
            width={100}
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/dashboard/change-data" className="nav-link">
              Change Data
            </Link>
            <Link
              href="#"
              className="nav-link"
              onClick={() => {
                push("/login");
                Cookies.remove("userData");
              }}
            >
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
