import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/about.css";
import ProductionImage from "../Images/Mic.jpg";
import logo from "../Images/Logo/Florella-black.svg";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-parallax">
        <div className="parallax-content">
          <h1>About</h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section">
        <div className="about-content">
          <div className="about-columns">
            {/* Left Column: Image */}
            <div className="about-image">
              <img src={ProductionImage} alt="About Us" />
            </div>

            {/* Right Column: Text */}
            <div className="about-text">
              <p>
                Welcome to our company! We are passionate about delivering the
                best services and products to our customers. Our journey began
                with a vision to create something extraordinary, and we are
                proud to say we’ve come a long way since our humble beginnings.
              </p>
              <p>
                At Florella, we believe in the power of creativity,
                sustainability, and community. Our team is dedicated to bringing
                innovation to life and providing a unique experience to all our
                clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Accolades Section */}
      <section className="Accolades">
        <div className="Accolades-header">
          <img src={logo} alt="Florella Logo" className="florella-logo" />
        </div>
        <div className="Accolades-content">
          <div className="Accolades-column-1">
            <p>Collaborations</p>
            <ol>
              <li>
                Vera Wang & Florella collaborated with designer Vera Wang to
                create a collection of wedding flower arrangements bringing Vera
                Wang's unique style to the floral industry.
              </li>
              <li>
                Tiffany & Co.: Florella has collaborated with Tiffany & Co. for
                exclusive floral arrangements presented in Tiffany Blue boxes,
                enhancing the luxury gifting experience.
              </li>
              <li>
                Estee Lauder: Estee Lauder collaborates with us (Florella) to
                create an exclusive collection of fragrances inspired by
                seasonal flowers. Each fragrance is paired with a matching fresh
                floral arrangement, available exclusively at Florella online.
                This collaboration combines Estee Lauder's expertise in
                luxurious scents with the boutique's reputation for stunning
                floral designs, offering customers an immersive sensory
                experience that celebrates the beauty of nature both in
                fragrance and in bloom.
              </li>
            </ol>
          </div>
          <div className="Accolades-column-2">
            <p>Events</p>
            <ol>
              <li>
                Florella at the Chelsea Flower Show presents "Garden of Dreams,"
                an enchanting exhibit featuring vibrant and exotic floral
                installations inspired by global cultures and landscapes.
                Visitors can enjoy the sights and scents of these unique
                displays and participate in daily workshops on floral
                arrangement, focusing on sustainability. Florella aims to
                inspire and educate guests about the art of floristry and the
                beauty of nature.
              </li>
              <li>
                'Floral Fusion' A Blooming Celebration is an extraordinary
                collaboration between Florella and Babylonstoren, seamlessly
                blending exotic blooms with native South African fynbos in an
                inspiring flower crown event. This unique gathering celebrates
                both artistry and sustainability in floristry, offering
                participants hands-on workshops, guided garden tours, and a deep
                appreciation of cultural floral significance. Engage in an
                innovative, artistic experience that beautifully unites
                Florella's creative excellence with Babylonstoren's rich
                botanical heritage.
              </li>
            </ol>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;
