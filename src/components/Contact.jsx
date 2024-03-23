import React from "react";
import { IoCall, IoMail, IoLocation } from "react-icons/io5";
import { FaGlobeAsia } from "react-icons/fa";
export default function Contact() {
  return (
    <section className="contact" id="contact"> 
      <div className="flexDis">
        <div className="disOne">
          <img src="/contact.gif" alt="contact" />
        </div>
        <div className="disTwo">
          <ul>
            <li>
              <a href="https://wa.me/+919779775469">
                <span>
                  <IoCall />
                </span>
                &nbsp;+91 977 977 5469
              </a>
            </li>
            <li>
              <a href="mailto:hello@allyintegra.com">
                <span>
                  <IoMail />
                </span>
                &nbsp;hello@allyintegra.com
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <IoLocation />
                </span>
                &nbsp;3-4-726, 302, Shantiniketan,<br/>Hyderabad, Telangana
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <FaGlobeAsia />
                </span>
                &nbsp;India, 500027
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
