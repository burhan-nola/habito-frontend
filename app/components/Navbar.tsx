"use client";
import Link from "next/link";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

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
            <NavDropdown title="Settings" id="basic-navbar-nav">
              <NavDropdown.Item href="/dashboard/change-data">
                Change Data
              </NavDropdown.Item>
              <NavDropdown.Item href="/dashboard/change-task">
                Change Task
              </NavDropdown.Item>
            </NavDropdown>
            <Link href="#" className="nav-link">
              News
            </Link>
            <Link href="#" className="nav-link">
              About Habito
            </Link>
            {/* <Link
              href="#"
              className="nav-link"
              onClick={() => {
                push("/login");
                Cookies.remove("userData");
              }}
            >
              Logout
            </Link> */}
            <Button
              style={{
                backgroundColor: "transparent",
                borderColor: "black",
                color: "black",
              }}
              onClick={() => {
                Cookies.remove("userData");
                window.location.reload();
              }}
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
