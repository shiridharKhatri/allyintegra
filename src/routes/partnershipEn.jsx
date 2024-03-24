import React, { useRef, useState } from "react";
import Nav from "../components/Nav";
import { MdAlternateEmail } from "react-icons/md";
import { IoPerson, IoCall, IoBusiness } from "react-icons/io5";
import { FaUserFriends, FaEnvelopeOpenText } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import Loader from "../components/Loader";

export default function PartnershipEn() {
  const successIcon = useRef(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    cname: "",
    pinterest: "",
    description: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      name: formData.name,
      email: formData.email,
      cnumber: formData.number,
      cname: formData.cname,
      nature: formData.pinterest,
      description: formData.description,
      question: formData.comments,
    });

    let response = await fetch(
      `https://allyintegra-backend.onrender.com/send-enquiry-partnership`,
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );

    let data = await response.json();
    console.log(data);
    if (data.succss === true) {
      successIcon.current.style.top = "4rem";
      setSuccess(false);
      setTimeout(() => {
        successIcon.current.style.top = "-15rem";
      }, 4000);
    } else {
      setSuccess(false);
    }
  };

  return (
    <>
      <Nav />
      <section className="enquiryForm partnershipEn">
        <div className="successIcon" ref={successIcon}>
          <div className="success">
            <div className="success__icon">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z"
                  fill="#393a37"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="success__title">
              Thank you for your enquiry! It has been successfully sent.
            </div>
            <div className="success__close">
              <svg
                height="20"
                viewBox="0 0 20 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                  fill="#393a37"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <h1>Partnership Enquiry</h1>
        <form onSubmit={handleSubmit}>
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.number}
                  onChange={handleChange}
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
                  value={formData.cname}
                  onChange={handleChange}
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
                  value={formData.pinterest}
                  onChange={handleChange}
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
                  value={formData.description}
                  onChange={handleChange}
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
                  value={formData.comments}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button type="submit">
            {success === true ? <Loader /> : "Submit"}
          </button>
        </form>
      </section>
    </>
  );
}
