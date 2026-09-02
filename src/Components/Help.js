import React, { useState } from "react";
// Help component that displays a help button. When clicked, it toggles the visibility of a popup that provides information about shipping options, including standard and express shipping details and their respective costs.
const Help = () => {
  const [showHelp, setShowHelp] = useState(false);
  // Function to toggle the visibility of the help popup. It updates the showHelp state to its opposite value, showing or hiding the popup when the help button is clicked.
  const toggleHelp = () => {
    setShowHelp((prevState) => !prevState);
  };

  return (
    <div>
      <button className="help-btn" onClick={toggleHelp}>
        Help
      </button>
      {showHelp && (
        <div className="help-popup">
          <h4>Shipping Options</h4>
          <p>
            <strong>Standard Shipping:</strong> Delivered in 5-7 business days.
            Cost: R30.00
          </p>
          <p>
            <strong>Express Shipping:</strong> Delivered in 1-3 business days.
            Cost: R70.00
          </p>
          <button onClick={toggleHelp}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Help;
