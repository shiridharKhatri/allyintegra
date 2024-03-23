import React from "react";
import Nav from "../components/Nav";
import { MdAlternateEmail } from "react-icons/md";
import { IoPerson, IoCall, IoBusiness } from "react-icons/io5";
import { FaUserFriends, FaEnvelopeOpenText } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
export default function PartnershipEn() {
  return (
    <>
      <Nav />
      <section className="enquiryForm partnershipEn">
        <h1>Partnership Enquiry</h1>
        <form action="">
          <div className="formSection">
            <div className="firstSectionForm">
              <div className="name formItem">
                <label htmlFor="name">
                  <span>
                    <IoPerson />
                  </span>
                 Name
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="eg, james"
                />
              </div>

              <div className="email formItem">
                <label htmlFor="email">
                  <span>
                    <MdAlternateEmail />
                  </span>
                 Email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="number formItem">
                <label htmlFor="number">
                  <span>
                    <IoCall />
                  </span>
                  Company number
                </label>

                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="+977 8728394628"
                />
              </div>

              <div className="cname formItem">
                <label htmlFor="cname">
                  <span>
                    <IoBusiness />
                  </span>
                 Company name
                </label>

                <input
                  type="text"
                  name="cname"
                  id="cname"
                  placeholder="eg, Google"
                />
              </div>

              <div className="pinterest formItem">
                <label htmlFor="pinterest">
                  <span>
                    <FaUserFriends />
                  </span>
                  Nature of Partnership Interest
                </label>

                <input
                  type="text"
                  name="pinterest"
                  id="pinterest"
                  placeholder="e.g., distribution, collaboration, joint venture "
                />
              </div>
            </div>
            <div className="secondSectionForm">
              <div className="description formItem">
                <label htmlFor="description">
                  <span>
                    <FaEnvelopeOpenText />
                  </span>
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                  placeholder="Brief Description of Company or Business"
                />
              </div>

              <div className="comments formItem">
                <label htmlFor="comments">
                  <span>
                    <FaCircleQuestion />
                  </span>
                  Questions
                </label>
                <textarea
                  name="comments"
                  id="comments"
                  cols="30"
                  rows="10"
                  placeholder="Additional Comments/Questions"
                />
              </div>
            </div>
          </div>
          <button>Submit</button>
        </form>
      </section>
    </>
  );
}
