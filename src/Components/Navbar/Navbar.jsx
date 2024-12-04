import "./Navbar.css";
import Logo from "./ESB.png";

const Navbar = () => {
  return (
    // Navbar
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand me-auto" href="#">
        <img className="weblogo" src={Logo} alt="Logo" />
                </div>

        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Logo
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#">
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#">
                  Contacts
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item mx-lg-2" href="#">
                      Animations
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mx-lg-2" href="#">
                      Video
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mx-lg-2" href="#">
                      Originals
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </div>

        <a
          className="login-button"
          style={{ textTransform: "capitalize" }}
        >
          Admin
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    // End of Navbar
  );
};

export default Navbar;
