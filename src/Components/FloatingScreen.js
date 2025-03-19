import React, { useState, useEffect } from "react";
import "../styles.css";

const FloatingScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open the floating screen automatically on load
    setIsOpen(true);
  }, []);

  return isOpen ? (
    <div className="floating-screen">
      <div className="floating-content">
        <h2>Welcome!</h2>
        <p>This is my Portfolio website👩‍💻</p>
        <button onClick={() => setIsOpen(false)}>Enter</button>
      </div>
    </div>
  ) : null;
};

export default FloatingScreen;