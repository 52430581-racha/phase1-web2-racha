import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark p-3">
      <div className="container">
        <Link to="/" className="navbar-brand text-white fw-bold">
          Smart Home
        </Link>

        <div className="d-flex gap-3 flex-wrap">
          <Link to="/" className="text-white text-decoration-none">
            Home
          </Link>

          <Link to="/about" className="text-white text-decoration-none">
            About
          </Link>

          <Link to="/services" className="text-white text-decoration-none">
            Services
          </Link>

          <Link to="/contact" className="text-white text-decoration-none">
            Contact
          </Link>

          <Link to="/contact-list" className="text-white text-decoration-none">
            Contact List
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
