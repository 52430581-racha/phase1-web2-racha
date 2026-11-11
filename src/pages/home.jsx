import { Link } from "react-router-dom";

const home = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: "Arduino UNO",
      price: 25,
      image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=500",
      description: "Microcontroller for smart home automation.",
    },
    {
      id: 2,
      name: "Security Camera",
      price: 65,
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500",
      description: "Monitor your home and improve security.",
    },
    {
      id: 3,
      name: "Smart LED Bulb",
      price: 18,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
      description: "Energy-saving intelligent home lighting.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Make Your Home Smarter</h1>

          <p>
            Discover smart home technology, Arduino automation, security
            systems, and intelligent devices.
          </p>

          <Link to="/services" className="btn shop-btn">
            Explore Our Products
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container section-padding">
        <h2 className="section-title">Why Choose Smart Home?</h2>
        <p className="section-subtitle">
          Improve your safety, comfort, and energy efficiency.
        </p>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h4>Smart Security</h4>
              <p>Motion sensors and alarms protect your house.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h4>Automatic Lighting</h4>
              <p>Control lighting automatically and save energy.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon">🌡️</div>
              <h4>Gas Safety</h4>
              <p>Detect gas leaks and activate ventilation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Discover our smart home devices.</p>

          <div className="row g-4">
            {products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="product-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>

                    <h5 className="product-price">${product.price}</h5>

                    <button
                      className="btn add-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      🛒 Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="container section-padding text-center">
        <h2>Start Your Smart Home Journey</h2>
        <p>Explore innovative devices and automation solutions.</p>

        <Link to="/contact" className="btn shop-btn">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default home;
