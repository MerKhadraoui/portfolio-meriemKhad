import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submit");
  };
  return (
    <div>
      <div className="words">
        <h1>Contact Me </h1>
      </div>
      <form className="contactMe" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button className="link-button" type="submit">
          {status}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
