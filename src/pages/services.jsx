const services = ({ addToCart }) => {
  const services = [
    {
      id: 4,
      name: "Motion Sensor",
      price: 12,
      icon: "🔒",
      description: "Detects movement and activates home security alarms.",
    },
    {
      id: 5,
      name: "Automatic Lighting Kit",
      price: 35,
      icon: "💡",
      description: "Automatically controls lighting using Arduino.",
    },
    {
      id: 6,
      name: "Gas Detection Kit",
      price: 30,
      icon: "🌡️",
      description: "Detects dangerous gas and activates the ventilation fan.",
    },
    {
      id: 7,
      name: "Smart Door System",
      price: 45,
      icon: "🚪",
      description: "Uses servo motors for automatic door control.",
    },
    {
      id: 8,
      name: "LCD Display Module",
      price: 15,
      icon: "📟",
      description: "Displays important smart home sensor information.",
    },
    {
      id: 9,
      name: "Smart Alarm System",
      price: 40,
      icon: "🚨",
      description: "Provides warning alerts using buzzers and sensors.",
    },
  ];

  return (
    <div className="container section-padding">
      <h1 className="section-title">Our Smart Home Products</h1>

      <p className="section-subtitle">
        Explore intelligent automation solutions and components.
      </p>

      <div className="row g-4">
        {services.map((service) => (
          <div className="col-md-6 col-lg-4" key={service.id}>
            <div className="service-card">
              <div className="service-icon">{service.icon}</div>

              <h4>{service.name}</h4>

              <p>{service.description}</p>

              <h5 className="product-price">${service.price}</h5>

              <button
                className="btn add-cart-btn"
                onClick={() => addToCart(service)}
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default services;
