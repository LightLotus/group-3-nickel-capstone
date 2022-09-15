import "../css/Contact.css";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import swal from "sweetalert";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");

    // 👇️ clear all input values in the form
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0b6kq8v",
        "template_9inue9u",
        form.current,
        "HUAvnsfNyG_z4pUd9"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            console.log(result.text);
            swal(
              "Successfully sent!",
              "Please wait for a response within 8-24hrs",
              "success"
            );
            handleSubmit();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Container>
        <h1 className="contact-us-h1">Contact Us</h1>
        <p className="contact-us-details">
          Got a question? Let us know by filling out the following form, giving
          us a call or email, or shooting us a Facebook message. Please check
          our FAQ at the bottom of the page to see if your question has already
          been answered. We look forward to hearing from you!
        </p>
        <div className="contact-us-grid">
          <div className="contact-us-form">
            <p className="form-details-p">How Can We Help?</p>
            <form ref={form} onSubmit={sendEmail}>
              <div class="form-details">
                <label className="form-details-label" id="name">
                  First Name (Required)
                </label>
                <input
                  onChange={(event) => setFirstName(event.target.value)}
                  value={firstName}
                  className="form-details-input"
                  type="text"
                  name="firstname"
                  id="fName"
                  required
                />
              </div>
              <div class="form-details">
                <label className="form-details-label" id="name">
                  Last Name (Required)
                </label>
                <input
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  className="form-details-input"
                  type="text"
                  name="lastname"
                  id="fName"
                  required
                />
              </div>
              <div class="form-details">
                <label className="form-details-label" id="email">
                  Email (Required)
                </label>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="form-details-input"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div class="form-details">
                <label className="form-details-label" id="subject">
                  Subject
                </label>
                <input
                  className="form-details-input"
                  type="text"
                  name="subject"
                  id="subject"
                />
              </div>
              <div class="form-details">
                <label
                  className="form-details-label"
                  id="message"
                  for="message"
                >
                  Message (Required)
                </label>

                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="form-details-textarea"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                value="send"
                className="form-details-button button-link-style"
              >
                Send
              </button>
            </form>
          </div>
          
          <div className="contact-us-address">
            <div className="contact-us-items">
              <FontAwesomeIcon className="contact-us-icons" icon={faAt} />
              <p className="contact-us-address-p">info@charmingpets.com</p>
            </div>
            <div className="contact-us-items">
              <FontAwesomeIcon className="contact-us-icons" icon={faPhone} />
              <p className="contact-us-address-p">0912-345-6789</p>
            </div>
            <div className="contact-us-items">
              <FontAwesomeIcon
                className="contact-us-icons"
                icon={faLocationDot}
              />
              <p className="contact-us-address-p">
                Brgy. San Juan, Surigao City <br /> Philippines 8400
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.3774095924487!2d120.98470821448048!3d14.463004856732642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf7fb25a537f%3A0x6b6756e31732e1b1!2sCharming%20FUR-fection%20Pet%20Care%20Services!5e0!3m2!1sen!2sph!4v1661985744842!5m2!1sen!2sph"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
