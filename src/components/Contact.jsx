import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

function handleSubmit(event) {
  event.preventDefault();

  const subject = `Portfolio Contact from ${formData.name}`;

  const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
  `;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=prashanthguguloth15@gmail.com&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.open(gmailUrl, "_blank");
}
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact Me</h2>

      <p>
        Interested in working together or discussing an opportunity?
        Feel free to connect with me.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="primary-button">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;