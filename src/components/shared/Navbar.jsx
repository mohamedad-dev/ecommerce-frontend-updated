import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-light shadow">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link className="navbar-brand" to="/">
          eCommerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" href="#">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/scategories" className="nav-link" href="#">
                S/Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/categories" className="nav-link" href="#">
                Categories
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
