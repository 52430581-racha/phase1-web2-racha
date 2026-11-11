import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ cart, removeFromCart }) => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <nav className="smart-navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          Smart<span>Home</span>
        </Link>

        <button className="menu-button" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </button>

        <div className={`nav-links ${showMenu ? "show-menu" : ""}`}>
          <Link to="/" onClick={() => setShowMenu(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setShowMenu(false)}>
            About
          </Link>
          <Link to="/services" onClick={() => setShowMenu(false)}>
            Services
          </Link>
          <Link to="/contact" onClick={() => setShowMenu(false)}>
            Contact
          </Link>
          <Link to="/contact-list" onClick={() => setShowMenu(false)}>
            Contact List
          </Link>
        </div>

        <div className="cart-area">
          <button
            className="cart-button"
            onClick={() => setShowCart(!showCart)}
          >
            🛒 Cart ({cart.length})
          </button>

          {showCart && (
            <div className="cart-dropdown">
              <h5>My Shopping Cart</h5>

              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <>
                  {cart.map((item, index) => (
                    <div className="cart-item" key={index}>
                      <div>
                        <strong>{item.name}</strong>
                        <p>${item.price}</p>
                      </div>

                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeFromCart(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}

                  <h5 className="mt-3">Total: ${total.toFixed(2)}</h5>
                  <p className="small text-muted">
                    Demo cart — no online payment.
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
