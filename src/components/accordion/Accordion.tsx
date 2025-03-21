import { useState } from "react";
import "./Accordion.css"; 

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button className="accordion-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide Details -" : "Show Details +"}
      </button>

      {isOpen && (
        <div className="accordion-content">
          <p>This is the accordion content. Click the button to toggle.</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
