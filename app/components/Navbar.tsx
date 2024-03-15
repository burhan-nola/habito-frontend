"use client";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Cookies from "js-cookie";

const NavbarComponent = () => {
  const { push } = useRouter();
  return (
    <Navbar bg="light" expand="lg">
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
            <Link href="/dashboard" className="nav-link">
              Home
            </Link>
            <NavDropdown title="Setting" id="basic-navbar-nav">
              <NavDropdown.Item href="/dashboard/change-data">
                Change Data
              </NavDropdown.Item>
              <NavDropdown.Item href="/dashboard/change-task">
                Change Task
              </NavDropdown.Item>
            </NavDropdown>
            <Link
              href="/login"
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
