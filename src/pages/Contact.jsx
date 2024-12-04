import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");

  // prevent default submit handler
  const handleSubmit = (event) => {
    event.preventDefault();

    // Make sure all field are completed
    if (!name || !email || !message) {
      setFormStatus("Please complete form.");
    } else {
      setFormStatus("Submitted contact form.");
      // Clears fields after submitted
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {formStatus && <p className="status-msg">{formStatus}</p>}
    </div>
  );
};

export default Contact;
