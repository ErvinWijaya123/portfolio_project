import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const id = "cPxkKwlLGZWU1D_0T";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_llji3qt", "template_iq6g0wm", form.current, {
        publicKey: id,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ervinwijaya888@gmail.com</h5>
            <a href="mailto:ervinwijaya888@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
