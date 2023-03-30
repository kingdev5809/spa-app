import React from "react";

function Contact(props) {
  return (
    <div>
      <section id="contact">
        <div className="contact-container container">
          <div className="contact-img">
            <img src="https://i.postimg.cc/1XvYM67V/restraunt2.jpg" alt="" />
          </div>

          <div className="form-container">
            <h2>Contact Us</h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="E-Mail" />
            <textarea
              cols="30"
              rows="6"
              placeholder="Type Your Message"
            ></textarea>
            <a href="#" className="btn btn-primary">
              Submit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
