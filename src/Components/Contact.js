import React, { useState } from "react";
import Footer from "./Footer"; // Import Footer component
import "../Styles/contact.css"; // Create/contact styles based on your design

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // Change from modal state to submitted state
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1"); // Default to US

  const countryCodes = [
    { code: "+27", name: "South Africa" },
    { code: "+1", name: "United States" },
    { code: "+44", name: "United Kingdom" },
    { code: "+91", name: "India" },
    // Add more countries as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "name":
      case "surname":
        if (!value.trim()) {
          errorMsg = "This field is required.";
        }
        break;

      case "email":
        if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          errorMsg = "Invalid email format.";
        }
        break;

      case "phone":
        if (!value.match(/^\+?[1-9]\d{1,14}$/)) {
          errorMsg = "Invalid phone number.";
        }
        break;

      case "message":
        if (!value.trim()) {
          errorMsg = "Message cannot be empty.";
        }
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));

    return errorMsg;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submitting
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validateField(key, formData[key]);
    });

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      alert("Please fix the errors before submitting the form.");
      return;
    }

    // Set submitted to true instead of opening a modal
    setSubmitted(true);

    // Clear form data
    setFormData({
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
    });
    setErrors({});
  };

  const handleCountryCodeChange = (e) => {
    setSelectedCountryCode(e.target.value);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-parallax">
        <div className="parallax-content">
          <h1>Contact Us</h1>
        </div>
      </section>
      <section className="form-container">
        <h1>Let's connect</h1>
        <p>Florella (Pyt) Ltd t/a</p>
        <p>Contact email: hello@florella.co.za</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name & Surname */}
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="First Name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              placeholder="Last Name"
            />
            {errors.surname && <span className="error">{errors.surname}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          {/* Phone with Country Code */}
          <div className="form-group">
            <select
              value={selectedCountryCode}
              onChange={handleCountryCodeChange}
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} ({country.code})
                </option>
              ))}
            </select>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Contact Number"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          {/* Message */}
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here"
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
          {submitted && (
            <div className="success-message">
              Thank you for your message! We will be in touch soon.
            </div>
          )}
        </form>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
