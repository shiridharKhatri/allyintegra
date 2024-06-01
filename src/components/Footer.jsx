import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="socialIcons">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61556553082003"
              style={{ backgroundColor: "#0165e1" }}
              title="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ally_integra/"
              style={{ backgroundColor: "#c13584" }}
              title="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/AllyIntegra"
              style={{ backgroundColor: "#000000" }}
              title="Twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/your_linkedin_page"
              style={{ backgroundColor: "#0a66c2" }}
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+919779775469"
              style={{ backgroundColor: "#25d366" }}
              title="WhatsApp"
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
