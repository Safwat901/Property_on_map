import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Login_button from "./Login_button";

const MenuBar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container
          style={{
            background: "white",
            width: "100%",
            marginLeft: "180px",
            height: "50px",
          }}
        >
          <Navbar.Brand href="/">
            <img
              style={{ marginLeft: "-90px" }}
              src="/logo.png"
              width="100px"
              height="60px "
              alt="logo"
              margin="200px"
            ></img>

            <span
              style={{
                color: "#4f7942",
                fontFamily: "Alumni Sans Inline One",
                fontSize: "30px",
                margin: "1px",
                padding: "10px",

                bottom: "50px",
              }}
            >
              Property On Map
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              style={{ marginLeft: "auto", color: "red" }}
              className="me-auto"
            >
              <div
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  gap: "30px",
                }}
              >
                <NavDropdown
                  title={
                    <span
                      style={{
                        color: "grey",
                        fontFamily: "Tahoma",
                        fontSize: "18px",
                      }}
                      className=" my-auto"
                    >
                      Buy
                    </span>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                {/* <2nd dropdown */}

                <NavDropdown
                  title={
                    <span
                      style={{
                        color: "grey",
                        fontFamily: "Tahoma",
                        fontSize: "18px",
                      }}
                      className=" my-auto"
                    >
                      Rent
                    </span>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  style={{
                    color: "grey",
                    fontFamily: "Tahoma",
                    fontSize: "18px",
                  }}
                  href="/Add_property"
                >
                  Add Property
                </Nav.Link>
                <Nav.Link
                  style={{
                    color: "grey",
                    fontFamily: "Tahoma",
                    fontSize: "18px",
                  }}
                  href="/Blog"
                >
                  Blog
                </Nav.Link>
                <Nav.Link
                  style={{
                    color: "grey",
                    fontFamily: "Tahoma",
                    fontSize: "18px",
                  }}
                  href="/New_projects"
                >
                  New Projects
                </Nav.Link>
                <Nav.Link
                  style={{
                    color: "grey",
                    fontFamily: "Tahoma",
                    fontSize: "18px",
                  }}
                  href="/Services"
                >
                  Services
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
          <Login_button title="Log in" />
        </Container>
      </Navbar>
    </>
  );
};

export default MenuBar;
