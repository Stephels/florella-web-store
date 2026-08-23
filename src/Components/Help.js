import React, { useState } from "react";

const Help = () => {
  const [showHelp, setShowHelp] = useState(false);

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
