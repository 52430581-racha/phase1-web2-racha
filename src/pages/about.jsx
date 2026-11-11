import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container section-padding">
      <h1 className="section-title">About Smart Home</h1>

      <p className="section-subtitle">
        Combining smart technology with modern online shopping.
      </p>

      <div className="about-card">
        <h3>Who We Are</h3>
        <p>
          Smart Home is a project designed to demonstrate how technology and
          automation can improve safety, comfort, and energy efficiency inside
          modern homes.
        </p>

        <h3>Our Smart Home System</h3>
        <p>
          Our system combines Arduino with motion sensors, gas sensors, servo
          motors, LEDs, buzzers, LCD displays, and automatic ventilation
          systems.
        </p>

        <h3>Our E-Commerce Website</h3>
        <p>
          Using ReactJS, Bootstrap, HTML, and CSS, we created a responsive
          website where visitors can discover smart home devices, explore
          products, view prices, and add items to their shopping cart.
        </p>

        <h3>Our Mission</h3>
        <p>
          Our goal is to make smart home technology easy to understand and
          accessible while demonstrating the connection between embedded systems
          and web development.
        </p>

        <div className="text-center mt-4">
          <Link to="/services" className="btn shop-btn">
            Discover Our Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
