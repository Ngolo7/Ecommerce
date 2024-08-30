import React, { useState } from "react";
import ContactForm from "./contactForm"; // Adjust the path as necessary

const Contact = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleOpenForm = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-6  font-semibold text-blue-400 text-xl">
        We’re here to help! Feel free to reach out with any questions, comments,
        or concerns.
      </p>

      <div className="mb-6">
        <h3 className="text-3xl font-semibold mb-2">Email:</h3>
        <p className="text-blue-400 text-xl hover:underline">
          <a href="mailto:info@footwear.com">info@footwear.com</a>
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-3xl font-semibold mb-2">Phone:</h3>
        <p className="text-blue-400 text-xl">
          <a href="tel:+11234567890" className="hover:underline">
            +1 (123) 456-7890
          </a>
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-3xl font-semibold mb-2">Address:</h3>
        <p className="text-blue-400 text-xl">
          <a
            href="https://www.google.com/maps/search/?api=1&query=123+Shoe+Lane,+Fashion+City,+FC+45678,+USA"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            45-56 49th street, Woodside, NY 11377, USA
          </a>
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-3xl font-semibold mb-2">Customer Support Hours:</h3>
        <p className="text-blue-400 text-xl">
          Monday - Friday: 9:00 AM - 6:00 PM
        </p>
        <p className="text-blue-400 text-xl">Saturday: 10:00 AM - 4:00 PM</p>
        <p className="text-blue-400 text-xl">Sunday: Closed</p>
      </div>

      <div className="mb-6">
        <h3 className="text-3xl font-semibold mb-2">Follow Us:</h3>
        <p className="text-blue-400 text-xl">
          <a
            href="https://www.github.com/ngolo7"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          |
          <a
            href="https://www.twitter.com/login"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          |
          <a
            href="https://www.instagram.com/accounts/login/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{" "}
          |
          <a
            href="https://www.linkedin.com/login/durga-gurung"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <div>
        <h3 className="text-3xl font-semibold mb-2">Contact Form:</h3>
        <p className="text-blue-400 text-xl">
          <button onClick={handleOpenForm} className="hover:underline">
            Click here to fill out our contact form
          </button>
        </p>
      </div>

      {isFormVisible && <ContactForm onClose={handleCloseForm} />}
    </section>
  );
};

export default Contact;
