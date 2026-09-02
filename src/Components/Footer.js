import React, { useState } from "react";
import "../Styles/footer.css";
// Footer component that displays the footer section of the website. It includes a copyright notice and a "Terms and Policies" link that shows a popup with links to the Privacy Policy, Terms of Service, and Contact Information when hovered over.
const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  // Function to handle mouse enter event on the "Terms and Policies" link. It sets the showPopup state to true, which displays the popup.
  const handleMouseEnter = () => {
    setShowPopup(true);
  };
  //  Function to handle mouse leave event on the "Terms and Policies" link. It checks if the mouse is moving to an element that is not part of the footer links or the popup. If so, it sets the showPopup state to false, which hides the popup.
  const handleMouseLeave = (e) => {
    const relatedTarget = e.relatedTarget;
    if (
      !relatedTarget ||
      !(
        relatedTarget.closest(".footer-links") ||
        relatedTarget.closest(".popup")
      )
    ) {
      setShowPopup(false);
    }
  };

  return (
    <section id="footer">
      <div className="footer-container">
        <p className="footer-text">© Florella 2026. Website Designed by SLH.</p>
        <div
          className="footer-links"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="popup-link">Terms and Policies</span>
        </div>
        {showPopup && (
          <div
            className="popup"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="popup-content">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/contact">Contact Information</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Footer;
