import React from "react";

import "./css/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Copyright © 2024 Rabbit Case Ltd | Last Updated | Concept by Rabbit
          Case Ltd
        </p>
        <p>
          We utilize cookies and additional data gathering technologies to
          enhance the user experience.
          <br />
          If you prefer that your data is not shared with third parties, you can
          make that request here: Do Not Sell My Data.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
