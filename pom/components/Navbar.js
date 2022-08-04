import Link from "next/link";
import Login_button from "./Login_button";

const Navbar = () => {
  return (
    <>
      <div className="navvbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
          <Link href="/">
            <a className="navbar-brand font-weight-bold">
              <img
                src="/logo.png"
                width="100px"
                height="60px "
                alt="logo"
              ></img>
              <img
                src="/name.png"
                width="150px"
                height="20px "
                alt="logo"
              ></img>
            </a>
          </Link>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto  ">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Buy
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Rent
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>

              <li className="nav-item active ">
                <Link href="/Add_property">
                  <a className="nav-link ">Add Property</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/Blog">
                  <a className="nav-link">Blog</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/New_projects">
                  <a className="nav-link">New Projects</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/Services">
                  <a className="nav-link">Services</a>
                </Link>
              </li>
              <Login_button />
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
