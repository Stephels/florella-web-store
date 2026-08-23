import React, { useState } from "react";
import "../Styles/footer.css"; // Import specific styling for the footer

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleMouseEnter = () => {
    // Show popup when mouse enters the footer link or popup
    setShowPopup(true);
  };

  const handleMouseLeave = (e) => {
    // Check if the mouse is leaving both the footer link and the popup
    const relatedTarget = e.relatedTarget;
    if (
      !relatedTarget ||
      !(
        relatedTarget.closest(".footer-links") ||
        relatedTarget.closest(".popup")
      )
    ) {
      setShowPopup(false); // Hide popup if mouse is leaving both areas
    }
  };

  return (
    <section id="footer">
      <div className="footer-container">
        <p className="footer-text">© Florella 2026. Website Designed by SLH.</p>
        {/* Footer Links Trigger */}
        <div
          className="footer-links"
          onMouseEnter={handleMouseEnter} // Show popup
          onMouseLeave={handleMouseLeave} // Check if mouse is leaving both areas
        >
          <span className="popup-link">Terms and Policies</span>
        </div>
        {/* Popup Content */}
        {showPopup && (
          <div
            className="popup"
            onMouseEnter={handleMouseEnter} // Keep popup visible when hovering
            onMouseLeave={handleMouseLeave} // Check if mouse is leaving both areas
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
