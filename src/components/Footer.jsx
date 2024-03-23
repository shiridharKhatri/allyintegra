import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="socialIcons">
        <ul>
          <li>
            <a
              style={{ background: "#0165e1" }}
              href="https://www.facebook.com/profile.php?id=61556553082003"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a style={{ background: "#c13584" }} href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              style={{ background: " #000000" }}
              href="https://twitter.com/AllyIntegra"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </li>
          <li>
            <a style={{ background: "#0a66c2" }} href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              style={{ background: "#25d366" }}
              href="https://wa.me/+919779775469"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>
        </ul>
      </div>
      <p>&copy; 2024 ALLY INTEGRA (OPC) PRIVATE LIMITED.</p>
    </footer>
  );
}
