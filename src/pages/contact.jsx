import { useNavigate } from "react-router-dom";

const contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");

    contacts.push(newContact);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    navigate("/contact-list");
  };

  return (
    <div className="container section-padding">
      <h1 className="section-title">Contact Us</h1>

      <p className="section-subtitle">
        Have questions about our smart home products? Send us a message!
      </p>

      <div className="row justify-content-center">
        <div className="col-lg-7">
          <form onSubmit={handleSubmit} className="contact-card">
            <h3 className="mb-4">Send Us a Message</h3>

            <label className="form-label">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="form-control mb-3"
              required
            />

            <label className="form-label">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="form-control mb-3"
              required
            />

            <label className="form-label">Your Message</label>
            <textarea
              name="message"
              placeholder="How can we help you?"
              className="form-control mb-4"
              rows="5"
              required
            />

            <button type="submit" className="btn add-cart-btn w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
