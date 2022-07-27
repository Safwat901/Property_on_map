import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navvbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
          <Link href="/">
            <a className="navbar-brand font-weight-bold">Property On Map</a>
          </Link>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto  ">
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
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
